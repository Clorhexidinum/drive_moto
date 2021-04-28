"use strict";

$(function () {
  $(".banner-slider").slick({
    dots: true,
    prevArrow:
      '  <button class="banner-slider__btn banner-slider__btn--prev"><img src="images/arrow-left.svg" alt="слайд влево"></button>',
    nextArrow:
      '  <button class="banner-slider__btn banner-slider__btn--next"><img src="images/arrow-right.svg" alt="слайд вправо"></button>',
    dotsClass: "banner-slider__dots",
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesTocroll: 1,
    prevArrow:
      '  <button class="product-slider__btn product-slider__btn--prev"><img src="images/arrow-black-left.svg" alt="слайд влево"></button>',
    nextArrow:
      '  <button class="product-slider__btn product-slider__btn--next"><img src="images/arrow-black-right.svg" alt="слайд вправо"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  //   $(".rate-yo").rateYo({
  //     ratedFill: "#1C62CD",
  //     spacing: "7px",
  //     normalFill: "#c4c4c4"
  //   });
});

// кнопка добавить в любимое (favorite)

function active(elem, cssclass) {
  elem.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle(cssclass);
    });
  });
}

const favorite = document.querySelectorAll(".product-item__favorite");

active(favorite, "product-item__favorite--active");

// кнопка добавить в сравнение (compare)

const compare = document.querySelectorAll(".product-item__compare");

active(favorite, "product-item__compare--active");

// Мобильное меню
const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
  const itemWrapper = document.querySelector(".menu-mobile__list");
  itemWrapper.classList.toggle("menu-mobile__list--active");
});

// Меню в футере
const footerTitle = document.querySelectorAll(".footer__top-title");

footerTitle.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("footer__topdrop--active");
  });
});

// Табы

const tabsBtn = document.querySelectorAll(".tab");

tabsBtn.forEach((elem) => {
  elem.addEventListener("click", (evt) => {
    evt.preventDefault();

    const tabsContent = document.querySelectorAll(".tabs__content");
    const tabId = elem.getAttribute("href");
    const currentTab = document.querySelector(tabId);

    if (!elem.classList.contains("tab--active")) {
      tabsBtn.forEach((item) => {
        item.classList.remove("tab--active");
      });

      tabsContent.forEach((item) => {
        item.classList.remove("tabs__content--active");
      });

      elem.classList.add("tab--active");
      currentTab.classList.add("tabs__content--active");
    }
  });
});

// Меню

const menuCategories = [
  "Квадроциклы",
  "Катера",
  "Гидроциклы",
  "Лодки",
  "Вездеходы",
  "Снегоходы",
  "Двигатели",
  "Запчасти",
];

const menuMobile = [
  "Войти",
  "Регистрация",
  "Избранное",
  "Корзина",
  "Магазины",
  "Акции",
  "Доставка и оплата",
];

const menuMobileImg = [
  "user.svg",
  "user.svg",
  "heart.svg",
  "basket.svg",
  "house.svg",
  "percent.svg",
  "menu-mobile__img",
  "box.svg",
];

const menuAdress = ["Москва,<br />ул. Науки 25"];

const menuCategoriesTempl = document.querySelector("#menu-item");
const menuMobWithImgTempl = document.querySelector("#menu-mobile-with-img");
const menuMobWithoutImgTempl = document.querySelector(
  "#menu-mobile-without-img"
);

const menuCategoriesParrent = document.querySelector(".menu-categories");
const menuMobileParrent = document.querySelector(".menu-mobile__list");

function renderCategoriesMenu(template, arr, parrent) {
  const link = template.content.querySelector("a");
  const img = template.content.querySelector("img");

  for (let i = 0; i < arr.length; i++) {
    link.innerHTML = arr[i];
    if (img !== null) {
      img.setAttribute("src", `images/${menuMobileImg[i]}`);
    }
    parrent.append(template.content.cloneNode(true));
  }
}

renderCategoriesMenu(
  menuCategoriesTempl,
  menuCategories,
  menuCategoriesParrent
);

renderCategoriesMenu(menuMobWithImgTempl, menuMobile, menuMobileParrent);

renderCategoriesMenu(menuMobWithoutImgTempl, menuMobile, menuMobileParrent);

renderCategoriesMenu(menuMobWithoutImgTempl, menuAdress, menuMobileParrent);
