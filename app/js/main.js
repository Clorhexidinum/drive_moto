$(function(){


  $('.banner-slider').slick({
    dots: true,
    prevArrow: '  <button class="banner-slider__btn banner-slider__btn--prev"><img src="images/arrow-left.svg" alt="слайд влево"></button>',
    nextArrow: '  <button class="banner-slider__btn banner-slider__btn--next"><img src="images/arrow-right.svg" alt="слайд вправо"></button>',
    dotsClass: 'banner-slider__dots',
    responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false,
      },
    }]
  });

  $(".tab").on('click', function(evt){
    evt.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.product-slider').slick('setPosition');
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesTocroll: 1,
    prevArrow: '  <button class="product-slider__btn product-slider__btn--prev"><img src="images/arrow-black-left.svg" alt="слайд влево"></button>',
    nextArrow: '  <button class="product-slider__btn product-slider__btn--next"><img src="images/arrow-black-right.svg" alt="слайд вправо"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  $('.filter-style').styler({
    grid: false,
    min: 90000,
    max: 500000,
  });

  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#c4c4c4"
  });

  $(".js-range-slider").ionRangeSlider();
});

// let a = new Product(goodsList[0]);
// const goodsOut = document.querySelector('.catalog__inner-list');
// let cardTemlate = document.querySelector('#product');

// for(let i = 0; i < 13; i++) {
//   a.renderCard(goodsOut, cardTemlate);
// }

// кнопка добавить в любимое (favorite)

const favorite = document.querySelectorAll('.product-item__favorite');

favorite.forEach((elem) => {
  elem.addEventListener('click', () => {
      elem.classList.toggle('product-item__favorite--active')
  })
})


// переключение сетки каталога
// const grid = document.querySelector('.catalog__btn-grid');
// const line = document.querySelector('.catalog__btn-line');
// const itemWrapper = document.querySelector('.product-item__wrapper');

// grid.addEventListener('click', () => {
//   grid.classList.add('catalog__filter-button--active');
//   line.classList.remove('catalog__filter-button--active');
//   itemWrapper.classList.remove('product-item__wrapper--list')
// })

// line.addEventListener('click', () => {
//   line.classList.add('catalog__filter-button--active');
//   grid.classList.remove('catalog__filter-button--active');
//   itemWrapper.classList.add('product-item__wrapper--list')
// })

// Мобильное меню
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
  const itemWrapper = document.querySelector('.menu-mobile__list');
  itemWrapper.classList.toggle('menu-mobile__list--active');
})

// Меню в футере
const footerTitle = document.querySelectorAll('.footer__top-title');

footerTitle.forEach((elem) => {
  elem.addEventListener('click', () => {
      elem.classList.toggle('footer__topdrop--active');
  })
})

// Топдроп в фильтре мобильная весия
// const filterBtn = document.querySelector('.aside-filter__btn');

// filterBtn.addEventListener('click', () => {
//   const asideBtn = document.querySelector('.aside-filter');
  
//   asideBtn.classList.toggle('aside-filter__active');
// })

// Топдроп в фильтре
// const asideFilterBtn = document.querySelectorAll('.aside-filter__item-title-drop');

// asideFilterBtn.forEach((elem) => {
//   elem.addEventListener('click', () => {
//       elem.classList.toggle('aside-filter__item-title-drop--activ');
//   })
// })
