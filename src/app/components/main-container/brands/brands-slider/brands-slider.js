import Swiper from "swiper";
// eslint-disable-next-line
import { Keyboard, Pagination } from "swiper/modules";
import { addHiddenSlides, removeHiddenSlides } from "../../../../utils/slider";

let mobileSlider = [];

const sliders = document.querySelectorAll(".swiper");
const mediaQuerySmall = window.matchMedia("(max-width: 767.9px)");

const createBrandSlider = (slider) => {
  return new Swiper(slider, {
    modules: [Pagination, Keyboard],

    loop: true,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: "16px",

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    pagination: {
      el: slider.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true
    }
  });
};

function handleMediaChange(event) {
  const isSmallScreen = event.matches;

  sliders.forEach((slider) => {
    if (isSmallScreen) {
      removeHiddenSlides();
      mobileSlider.push(createBrandSlider(slider));

      slider.dataset.mobile = "true";
    } else {
      if (slider.classList.contains("swiper-initialized")) {
        mobileSlider.forEach((el) => el.destroy());
      }
      addHiddenSlides();

      slider.dataset.mobile = "false";
    }
  });
}

handleMediaChange(mediaQuerySmall);
mediaQuerySmall.addEventListener("change", handleMediaChange);
