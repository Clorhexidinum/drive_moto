$(function(){


  $('.banner-slider').slick({
    dots: true,
    prevArrow: '  <button class="banner-slider__btn banner-slider__btn--prev"><img src="images/arrow-left.svg" alt="слайд влево"></button>',
    nextArrow: '  <button class="banner-slider__btn banner-slider__btn--next"><img src="images/arrow-right.svg" alt="слайд вправо"></button>',
    dotsClass: 'banner-slider__dots',
  });

  $(".tab").on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');
  });

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active');
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesTocroll: 1,
    prevArrow: '  <button class="product-slider__btn product-slider__btn--prev"><img src="images/arrow-black-left.svg" alt="слайд влево"></button>',
    nextArrow: '  <button class="product-slider__btn product-slider__btn--next"><img src="images/arrow-black-right.svg" alt="слайд вправо"></button>',
  });

  $('.aside-filter__item-title-drop, .aside-filter__extra').on('click', function(){
    $(this).toggleClass('aside-filter__item-title-drop--active');
    $(this).next().slideToggle('200');
  });

  $('.filter-style').styler({
    grid: false,
    min: 90000,
    max: 500000,
  });

  $(".js-range-slider").ionRangeSlider();

  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#c4c4c4"
  });

  $('.catalog__btn-grid').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__btn-line').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__btn-line').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__btn-grid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });
});