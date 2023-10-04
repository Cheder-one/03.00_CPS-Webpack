import {
  showBackdrop,
  showLeftSidebar,
  toggleBodyScroll
} from "../../../utils/sidebar";

const burger = document.querySelector(".top-menu__burger");

burger.onclick = () => {
  toggleBodyScroll();
  showBackdrop();
  showLeftSidebar();
};
