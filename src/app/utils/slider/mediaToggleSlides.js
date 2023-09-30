const sliderWrapper = document.querySelectorAll(".swiper-wrapper");
const slidesTemplate = document.querySelectorAll(".swiper__hidden-slides");

const findHiddenSlides = () => {
  return document.querySelectorAll(".swiper-slide--hidden");
};

export const addHiddenSlides = () => {
  const hiddenSlides = findHiddenSlides();

  if (hiddenSlides.length === 0) {
    const clonedTemplate = [];

    slidesTemplate.forEach((template) =>
      clonedTemplate.push(template.content.cloneNode(true))
    );
    sliderWrapper.forEach((wrap, i) =>
      clonedTemplate[i] ? wrap.appendChild(clonedTemplate[i]) : ""
    );
  }
};

export const removeHiddenSlides = () => {
  const hiddenSlides = findHiddenSlides();

  if (hiddenSlides.length > 0) {
    hiddenSlides.forEach((el) => el.remove());
  }
};
