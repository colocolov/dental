// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, EffectFade } from "swiper";

if (_vars.founderSlider) {
  
Swiper.use([Navigation, EffectFade]);

// слайдер на главной
new Swiper(_vars.founderSlider, {
  loop: true,
  speed: 800,
  // навигация по стрелкам
  navigation: {
    nextEl: ".founder--next",
    prevEl: ".founder--prev",
    clickable: true,
  },
  //эффект перехода слайда (только если показ по 1-му слайду)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

});
//----- END
}