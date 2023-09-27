const brandsCollapse = document.querySelector(".b-brand-slider--collapsed");
const showMoreBtn = brandsCollapse.querySelector(".b-brand-slider__e-more-btn");
const showMoreText = showMoreBtn.querySelector("span");

const checkIsExpanded = () => {
  return showMoreBtn.classList.contains(
    "b-brand-slider__e-more-btn--collapsed"
  );
};

showMoreBtn.addEventListener("click", () => {
  const isExpanded = checkIsExpanded();

  showMoreBtn.classList.toggle("b-brand-slider__e-more-btn--collapsed");
  showMoreBtn.classList.toggle("b-brand-slider__e-more-btn--expanded");

  brandsCollapse.classList.toggle("b-brand-slider--collapsed");
  brandsCollapse.classList.toggle("b-brand-slider--expanded");

  if (isExpanded) {
    showMoreText.textContent = "Скрыть";
  } else {
    showMoreText.textContent = "Показать все";
  }
});
