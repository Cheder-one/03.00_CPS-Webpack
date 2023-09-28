export const toggleContainerState = (slidesCollapse, containerClass) => {
  slidesCollapse.classList.toggle(`${containerClass}--collapsed`);
  slidesCollapse.classList.toggle(`${containerClass}--expanded`);
};
