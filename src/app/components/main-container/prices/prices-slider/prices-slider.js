const slidesData = [
  {
    service: "Диагностика",
    price: "Бесплатно",
    duration: "30 мин"
  },
  {
    service: "Замена дисплея",
    price: "1 000 ₽",
    duration: "30-120 мин"
  },
  {
    service: "Замена полифонического динамика",
    price: "1 000 ₽",
    duration: "30-120 мин"
  },
  {
    service: "Тестирование с выдачей технического заключения",
    price: "1 000 ₽",
    duration: "30-120 мин"
  },
  {
    service: "Замена программного обеспечения",
    price: "1 000 ₽",
    duration: "30-120 мин"
  }
];

const template = document.querySelector(".prices-slider__template").content;
const slideTemplate = template.querySelector(".prices-slider__slide");
const slideText = slideTemplate.querySelectorAll(".prices-slider__slide-item");

function addSlidesFromTemplate(data) {
  const clonedSlides = [];

  data.forEach(({ service, price, duration }) => {
    slideText[0].textContent = service;
    slideText[1].textContent = price;
    slideText[2].textContent = duration;

    const clonedSlide = slideTemplate.cloneNode(true);
    clonedSlides.push(clonedSlide);
  });

  const pricesSlider = document.querySelector(".prices-slider__wrapper");

  clonedSlides.forEach((slide) => {
    pricesSlider.append(slide);
  });
}
addSlidesFromTemplate(slidesData);
