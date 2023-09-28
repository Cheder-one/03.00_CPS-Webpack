import expandImg from "../../../../assets/img/expand.svg";
import collapseImg from "../../../../assets/img/collapse.svg";
import {
  toggleContainerState,
  toggleMoreBtnState
} from "../../../../utils/slider";

function toggleSlidesCollapse(sliderContainerClass) {
  const slidesCollapse = document.querySelector(
    `.${sliderContainerClass}--collapsed`
  );

  const showMoreBtn = slidesCollapse.querySelector(".brands-slider__more-btn");
  const showMoreText = showMoreBtn.querySelector("span");
  const showMoreIcon = showMoreBtn.querySelector("img");

  const checkIsBtnExpanded = () => {
    return showMoreBtn.classList.contains("brands-slider__more-btn--collapsed");
  };

  showMoreBtn.addEventListener("click", () => {
    const isExpanded = checkIsBtnExpanded();

    toggleMoreBtnState(showMoreBtn);
    toggleContainerState(slidesCollapse, sliderContainerClass);

    if (isExpanded) {
      showMoreText.textContent = "Скрыть";
      showMoreIcon.src = collapseImg;
    } else {
      showMoreText.textContent = "Показать все";
      showMoreIcon.src = expandImg;
    }
  });
}

toggleSlidesCollapse("brands-slider");

export { toggleSlidesCollapse };
