export const toggleMoreBtnState = (showMoreBtn, btnClass) => {
  showMoreBtn.classList.toggle(`${btnClass}--collapsed`);
  showMoreBtn.classList.toggle(`${btnClass}--expanded`);
};
