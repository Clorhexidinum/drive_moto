class Product {
    constructor (arr) {
      this.name = arr.name;
      this.image = arr.image;
      this.price = arr.price;
      this.sale = arr.sale;
      this.rate = arr.rate;
      this.availability = arr.availability;
      this.country = arr.country;
      this.numberOfPlaces = arr.numberOfPlaces;
    }

    finalPrice () {
      return parseInt((this.price / 100) * (100 - this.sale));
    }
    
    renderCard (parrent, template) {
      const item = template.content.querySelector('.product-item__wrapper');
      const name = template.content.querySelector('.product-item__title');
      const price = template.content.querySelector('.product-item__price');
      const priceOld = template.content.querySelector('.product-item__price-old');
      const img = template.content.querySelector('.product-item__img');
      const btn = template.content.querySelector('.product-item');
      
      name.textContent = this.name;
      price.textContent = `${this.finalPrice().toLocaleString()} ₽`;
      img.setAttribute('src', `./images/content/${this.image}`);

      if (this.availability < 1) {
        item.classList.add('product-item__not-available');
      }

      if (this.sale > 0) {
        btn.classList.add('product-item--sale');
        priceOld.textContent = this.price;
      } else {
        priceOld.remove();
      }
   
      parrent.append(template.content.cloneNode(true));
    }
}
