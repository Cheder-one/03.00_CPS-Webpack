const body = document.querySelector(".body");
const backdrop = document.querySelector(".sidebar-backdrop");
const sidebarLeft = document.querySelector(".sidebar");
const sidebarRight = document.querySelector(".sidebar-right");

export const toggleBodyScroll = () => {
  body.classList.toggle("body--scroll--unlock");
  body.classList.toggle("body--scroll--lock");
};

export const showBackdrop = () => {
  backdrop.classList.replace(
    "sidebar-backdrop--hidden",
    "sidebar-backdrop--active"
  );
};
export const hideBackdrop = () => {
  backdrop.classList.replace(
    "sidebar-backdrop--active",
    "sidebar-backdrop--hidden"
  );
};

export const showLeftSidebar = () => {
  sidebarLeft.classList.replace("sidebar--hidden", "sidebar--active");
};
export const hideLeftSidebar = () => {
  sidebarLeft.classList.replace("sidebar--active", "sidebar--hidden");
};

export const showRightSidebar = () => {
  sidebarRight.classList.replace(
    "sidebar-right--hidden",
    "sidebar-right--active"
  );
};
export const hideRightSidebar = () => {
  sidebarRight.classList.replace(
    "sidebar-right--active",
    "sidebar-right--hidden"
  );
};

export const hideAllSidebars = () => {
  sidebarLeft.classList.replace("sidebar--active", "sidebar--hidden");
  sidebarRight.classList.replace(
    "sidebar-right--active",
    "sidebar-right--hidden"
  );
};
