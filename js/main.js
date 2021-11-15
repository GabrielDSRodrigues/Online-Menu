import { category } from "./components/category.js";
import { item } from "./components/item.js";
import { listItem } from "./components/listItem.js";
import { insert, id } from "./methods/dom.js";
import { block, none, visibility } from "./methods/style.js";
import { waAPI } from "./methods/whatsAppAPI.js";

export { waAPI }

export let categories = {
  add: function(title, $id) {
    let $new = new category(title, $id);
    insert($new.element, id("categories"));
  }
}

export let items = {
  id: 0,
  data: [],
  add: function(name, desc, price, img, category) {

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
}

let list = {
  content: "",
  total: 0,
  totalDisplay: id("list-total"),
  address: id("address"),
  def: function() {

    let list = id("list-items");
    list.innerHTML = "";

    this.total = 0;
    this.content = "*Pedidos*\n\n";

    for (let i = 0; i < items.data.length; i++) {
      let item = items.data[i];
      if (item.total > 0) {
        this.total += item.total;
        insert(listItem(item.name, item.un, item.total), list);
        this.content += `*${item.un}* - ${item.name} | *R$${item.total}*\n`;
      }
    }

    this.content += `\nTotal: *R$${this.total}*\nEndereço: *${this.address.value}*`;
    this.totalDisplay.innerText = `R$${this.total}`;

  }
}

id("list-btn").addEventListener("click", () => {
  list.def();
  if (list.address.value != "") {
    waAPI.go(list.content);
  }
})

none(id("list"));
id("btn-finish").addEventListener("click", () => {
  visibility(id("list"));
});