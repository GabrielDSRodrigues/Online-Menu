import { id } from "../methods/dom.js";

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
    id(obj.totalDisplay).innerText = "R$" + obj.total;
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

  get element() {
    return `
      <div class="group-item">
        <img class="group-item-img" src="imgs/thumbnails/${this.img}">
        <h2 class="group-item-name">${this.name}</h2>
        <p class="group-item-desc">${this.desc}</p>
        <div class="group-item-price">R$${this.price}</div>
        <h3 class="group-item-total" id="${this.totalDisplay}">R$${this.total}</h3>
        <div class="ctrl-item-total">
          <button id="${this.btn_subtract}">-</button>
          <div id="${this.unDisplay}">${this.un}</div>
          <button id="${this.btn_sum}">+</button>
        </div>
      </div>
    `;
  }
}