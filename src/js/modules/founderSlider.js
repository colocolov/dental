// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from "swiper";

if (_vars.founderSlider) {
  
Swiper.use([Navigation, EffectFade]);

// слайдер на главной
new Swiper(_vars.founderSlider, {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  // навигация по стрелкам
  navigation: {
    nextEl: ".navigation__btn-next",
    prevEl: ".navigation__btn-prev",
    clickable: true,
  },
  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // адаптив
  breakpoints: {
    // when window width is >= 320px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
  },

});
//----- END
}