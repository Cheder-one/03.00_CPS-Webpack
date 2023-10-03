const body = document.querySelector(".body");
const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".sidebar-backdrop");

export const toggleSidebarNScrollState = () => {
  body.classList.toggle("body--scroll--unlock");
  body.classList.toggle("body--scroll--lock");

  sidebar.classList.toggle("sidebar--hidden");
  sidebar.classList.toggle("sidebar--active");

  backdrop.classList.toggle("sidebar-backdrop--hidden");
  backdrop.classList.toggle("sidebar-backdrop--active");
};
