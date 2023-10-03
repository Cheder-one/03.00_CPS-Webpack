import { toggleSidebarNScrollState } from "../../../utils/sidebar";

const burger = document.querySelector(".top-menu__burger");

burger.onclick = () => {
  console.log(burger);
  toggleSidebarNScrollState();
};
