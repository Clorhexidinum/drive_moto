// // переключение сетки каталога
const grid = document.querySelector(".catalog__btn-grid");
const line = document.querySelector(".catalog__btn-line");
const itemWrapper = document.querySelectorAll(".product-item__wrapper");

grid.addEventListener("click", () => {
  grid.classList.add("catalog__filter-button--active");
  line.classList.remove("catalog__filter-button--active");
  itemWrapper.forEach((elem) => {
    elem.classList.remove("product-item__wrapper--list");
  });
});

line.addEventListener("click", () => {
  line.classList.add("catalog__filter-button--active");
  grid.classList.remove("catalog__filter-button--active");
  itemWrapper.forEach((elem) => {
    elem.classList.add("product-item__wrapper--list");
  });
});

// Топдроп в фильтре мобильная весия
const filterBtn = document.querySelector(".aside-filter__btn");

filterBtn.addEventListener("click", () => {
  const asideBtn = document.querySelector(".aside-filter");

  asideBtn.classList.toggle("aside-filter__active");
});

// Топдроп в фильтре
const asideFilterBtn = document.querySelectorAll(
  ".aside-filter__item-title-drop"
);

asideFilterBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("aside-filter__item-title-drop--active");
  });
});
