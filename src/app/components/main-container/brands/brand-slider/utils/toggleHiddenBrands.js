const sliderWrapper = document.querySelectorAll(".swiper-wrapper");
const slidesTemplate = document.querySelectorAll(".swiper__hidden-slides");

const findHiddenSlides = () => {
  return document.querySelectorAll(".swiper-slide--hidden");
};

export const addHiddenSlides = () => {
  const hiddenBrands = findHiddenSlides();

  if (hiddenBrands.length === 0) {
    const clonedTemplate = [];
    slidesTemplate.forEach((template) => {
      clonedTemplate.push(template.content.cloneNode(true));
    });
    sliderWrapper.forEach((wrap, i) => wrap.appendChild(clonedTemplate[i]));
  }
};

export const removeHiddenSlides = () => {
  const hiddenBrands = findHiddenSlides();

  if (hiddenBrands.length > 0) {
    hiddenBrands.forEach((el) => el.remove());
  }
};
