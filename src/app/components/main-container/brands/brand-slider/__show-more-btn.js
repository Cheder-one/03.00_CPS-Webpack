import expandImg from "../../../../assets/img/expand.svg";
import collapseImg from "../../../../assets/img/collapse.svg";

const brandsCollapse = document.querySelector(".brand-slider--collapsed");
const showMoreBtn = brandsCollapse.querySelector(".brand-slider__more-btn");
const showMoreText = showMoreBtn.querySelector("span");
const showMoreIcon = showMoreBtn.querySelector("img");

const checkIsBtnExpanded = () => {
  return showMoreBtn.classList.contains("brand-slider__more-btn--collapsed");
};

showMoreBtn.addEventListener("click", () => {
  const isExpanded = checkIsBtnExpanded();

  showMoreBtn.classList.toggle("brand-slider__more-btn--collapsed");
  showMoreBtn.classList.toggle("brand-slider__more-btn--expanded");

  brandsCollapse.classList.toggle("brand-slider--collapsed");
  brandsCollapse.classList.toggle("brand-slider--expanded");

  if (isExpanded) {
    showMoreText.textContent = "Скрыть";
    showMoreIcon.src = collapseImg;
  } else {
    showMoreText.textContent = "Показать все";
    showMoreIcon.src = expandImg;
  }
});
