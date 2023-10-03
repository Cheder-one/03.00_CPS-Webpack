import { toggleSidebarNScrollState } from "../../../../utils/sidebar";

const closeSidebar = document.querySelector(".sidebar-top__close-burger");

closeSidebar.onclick = () => {
  console.log(closeSidebar);
  toggleSidebarNScrollState();
};
