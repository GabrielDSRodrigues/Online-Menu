import { id, insert } from "../methods/dom.js";
import { list } from "./list.js";

export class item {
  constructor(name, desc, price, img, $id) {
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.img = img;
    this.id = $id;
    this.btn_subtract = "subtract" + $id;
    this.btn_sum = "sum" + $id;
    this.un = 0;
    this.unDisplay = "un" + $id;
    this.total = 0;
    this.totalDisplay = "total" + $id;
  }

  static update(obj) {
    id(obj.totalDisplay).innerText = item.currency + obj.total;
    id(obj.unDisplay).innerText = obj.un;
  }

  static sum(obj) {
    obj.total = ((++obj.un) * parseFloat(obj.price));
    this.update(obj);
  }

  static subtract(obj) {
    if (obj.un > 0) {
      obj.total = ((--obj.un) * parseFloat(obj.price));
      this.update(obj);
    }
  }

  static id = 0;
  static currency = "R$";
  static data = [];
  static add(name, desc, price, img, category) {

    let $new = new item(name, desc, price, img, this.id, category);

    this.data.push($new);

    insert($new.element, id(category));

    id($new.btn_subtract).addEventListener("click", () => {
      item.subtract(this.data[$new.id]);
      list.def();
    });

    id($new.btn_sum).addEventListener("click", () => {
      item.sum(this.data[$new.id]);
      list.def();
    });

    this.id++;

  }

  get element() {
    return `
      <div class="group-item">
        <img class="group-item-img" src="imgs/thumbnails/${this.img}">
        <h2 class="group-item-name">${this.name}</h2>
        <p class="group-item-desc">${this.desc}</p>
        <div class="group-item-price">R$${this.price}</div>
        <h3 class="group-item-total" id="${this.totalDisplay}">${item.currency}${this.total}</h3>
        <div class="ctrl-item-total">
          <button id="${this.btn_subtract}">-</button>
          <div id="${this.unDisplay}">${this.un}</div>
          <button id="${this.btn_sum}">+</button>
        </div>
      </div>
    `;
  }
}