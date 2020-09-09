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
});