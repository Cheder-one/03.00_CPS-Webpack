import {
  hideAllSidebars,
  hideBackdrop,
  toggleBodyScroll
} from "../../../utils/sidebar";

const backdrop = document.querySelector(".sidebar-backdrop");

backdrop.onclick = () => {
  toggleBodyScroll();
  hideBackdrop();
  hideAllSidebars();
};
