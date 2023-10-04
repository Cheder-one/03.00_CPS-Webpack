import { toggleSidebarNScrollState } from "../../../../utils/sidebar";

const closeSidebar = document.querySelector(".sidebar-top__close");

closeSidebar.onclick = () => {
  console.log(closeSidebar);
  toggleSidebarNScrollState();
};
