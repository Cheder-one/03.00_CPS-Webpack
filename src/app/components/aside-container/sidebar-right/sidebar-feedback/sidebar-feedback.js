import {
  hideBackdrop,
  hideRightSidebar,
  toggleBodyScroll
} from "../../../../utils/sidebar";

const close = document.querySelector(".sidebar-feedback__close");

close.onclick = () => {
  // const isLeftSidebarExist = document.querySelector(".sidebar--hidden");

  hideRightSidebar();
  // if (isLeftSidebarExist) {
  hideBackdrop();
  // }
  toggleBodyScroll();
};
