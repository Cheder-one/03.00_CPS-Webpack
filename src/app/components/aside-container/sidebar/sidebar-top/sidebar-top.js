import {
  hideAllSidebars,
  hideBackdrop,
  toggleBodyScroll
} from "../../../../utils/sidebar";

const closeSidebar = document.querySelector(".sidebar-top__close");

closeSidebar.onclick = () => {
  toggleBodyScroll();
  hideBackdrop();
  hideAllSidebars();
};
