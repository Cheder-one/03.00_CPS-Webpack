const sidebarFeedback = document.querySelector(".sidebar-feedback");
const call = document.querySelector(".contacts__icon-call");
const feedback = document.querySelector(".contacts__icon-chat");
const close = document.querySelector(".sidebar-feedback__close");

feedback.onclick = () => {
  showRightSidebar();
  showBackdrop();
  sidebarFeedback.classList.replace(
    "sidebar-feedback--call",
    "sidebar-feedback--feedback"
  );
};

call.onclick = () => {
  showRightSidebar();
  showBackdrop();
  sidebarFeedback.classList.replace(
    "sidebar-feedback--feedback",
    "sidebar-feedback--call"
  );
};
