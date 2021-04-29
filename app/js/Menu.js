new (class Menu {
  constructor(item, img) {
    this.item = item;
    this.img = img;
  }

  renderCategoriesMenu(template, arr, parrent) {
    const link = template.content.querySelector("a");
    const img = template.content.querySelector("img");

    link.innerHTML = this.item;
    if (img !== null) {
      img.setAttribute("src", `images/${this.img}`);
    }

    parrent.append(template.content.cloneNode(true));
  }
})();
