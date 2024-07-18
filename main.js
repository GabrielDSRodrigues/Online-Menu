import { category } from "./category.js";
import { item } from "./item.js";
import { list } from "./list.js";
import { insert, id } from "./dom.js";
import { block, none, visibility } from "./style.js";
import { waAPI } from "./whatsAppAPI.js";

export { waAPI }
export { category }
export { item }


id("list-btn").addEventListener("click", () => {
  list.def();
  if (list.$address.value != "") {
    waAPI.go(list.$content);
  }
})

none(id("list"));
id("btn-finish").addEventListener("click", () => {
  visibility(id("list"));
});