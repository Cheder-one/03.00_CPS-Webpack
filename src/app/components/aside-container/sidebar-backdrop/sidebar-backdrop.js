import { toggleSidebarNScrollState } from "../../../utils/sidebar";

const backdrop = document.querySelector(".sidebar-backdrop");

backdrop.onclick = () => {
  toggleSidebarNScrollState();
};
