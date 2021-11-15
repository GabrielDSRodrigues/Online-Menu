export class category {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  get element() {
    return `
      <div class="group-category" id="${this.id}">
        <h2 class="group-title">${this.title}</h2>
      </div>
    `;
  }
}