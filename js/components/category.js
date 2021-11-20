import { insert, id } from "../methods/dom.js"

export class category {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  static add(title, $id) {
    let $new = new category(title, $id);
    insert($new.element, id("categories"));
  }

  get element() {
    return `
      <div class="group-category" id="${this.id}">
        <h2 class="group-title">${this.title}</h2>
      </div>
    `;
  }
}