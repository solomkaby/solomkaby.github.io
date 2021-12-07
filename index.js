import { showLoader, hideLoader } from "./src/scripts/UI/loader.js";
import { $body, setMarginForHeader } from "./src/scripts/indent.js";
import { setPhoneMask } from "./src/scripts/phones/inputMask.js";
import { rewriteCallLinks } from "./src/scripts/phones/callLinks.js";
import { navs, addHandlerPageNav } from "./src/scripts/move/navMove.js";
import { applications, moveToSendSection } from "./src/scripts/move/toSendSection.js";
import { $burgerIcon, toggleShowMenu } from "./src/scripts/burger.js";
import {
  $slider,
  $sliderNav,
  setPoginationSize,
  setPositionTouchStart,
  setPositionTouchEnd,
  addHandlerSliderTouch,
  addHandlerSliderClicks,
} from "./src/scripts/slider/swiper.js";
import { startAutoSwiper } from "./src/scripts/slider/autoSwiper.js";
import { $sendForm, handlerChangeSendForm } from "./src/scripts/form/validator.js";
import { submitForm } from "./src/scripts/form/submit.js";

const start = () => {
  try {
    setMarginForHeader();
    setPhoneMask();
    rewriteCallLinks();
    setPoginationSize();
    startAutoSwiper();

    navs.forEach(($nav) => $nav.addEventListener("click", addHandlerPageNav));
    applications.forEach(($application) =>
      $application.addEventListener("click", moveToSendSection)
    );
    $burgerIcon.addEventListener("click", toggleShowMenu);
    $slider.addEventListener("touchstart", setPositionTouchStart);
    $slider.addEventListener("touchmove", setPositionTouchEnd);
    $slider.addEventListener("touchend", addHandlerSliderTouch);
    $sliderNav.addEventListener("click", addHandlerSliderClicks);
    $sendForm.addEventListener("change", handlerChangeSendForm);
    $sendForm.addEventListener("submit", submitForm);
  } catch (error) {
    console.error(error);
  } finally {
    $body.style.opacity = 1;

    hideLoader();
  }
};

window.addEventListener("DOMContentLoaded", showLoader);
window.addEventListener("load", start);
