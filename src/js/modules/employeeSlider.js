// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay } from "swiper";

if (_vars.employeeSlider) {
  
  Swiper.use([Navigation, Autoplay]);
  
  // устанавливаем свой размер отступов через глобальную переменную --gap
  const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--gap"));
  console.log(gap);

  // слайдер на главной
  new Swiper(_vars.employeeSlider, {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    // навигация по стрелкам
    navigation: {
      nextEl: ".employee--next",
      prevEl: ".employee--prev",
      clickable: true,
    },
    
    slidesPerView: 1,
    spaceBetween: 10,

    // адаптив
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      922: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1150: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1260: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

  });
  //----- END
}