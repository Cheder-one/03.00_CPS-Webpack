import expandImg from "../../../../assets/img/expand.svg";
import collapseImg from "../../../../assets/img/collapse.svg";
import {
  toggleContainerState,
  toggleMoreBtnState
} from "../../../../utils/slider";

function toggleSlidesCollapse(containerClass, btnFullClass) {
  const slidesCollapse = document.querySelector(
    `.${containerClass}--collapsed`
  );

  const showMoreBtn = slidesCollapse.querySelector(btnFullClass);
  const showMoreText = showMoreBtn.querySelector("span");
  const showMoreIcon = showMoreBtn.querySelector("img");

  const checkIsBtnCollapsed = () => {
    return showMoreBtn.classList.contains(`${btnFullClass}--collapsed`);
  };

  showMoreBtn.addEventListener("click", () => {
    const isCollapsed = checkIsBtnCollapsed();

    toggleMoreBtnState(showMoreBtn, btnFullClass);
    toggleContainerState(slidesCollapse, containerClass);

    if (isCollapsed) {
      showMoreText.textContent = "Показать все";
      showMoreIcon.src = expandImg;
    } else {
      showMoreText.textContent = "Скрыть";
      showMoreIcon.src = collapseImg;
    }
  });
}

toggleSlidesCollapse("brands-slider", ".brands-slider__more-btn");

export { toggleSlidesCollapse };
