import {
  hideLeftSidebar,
  showBackdrop,
  showRightSidebar,
  switchSidebarToCall,
  switchSidebarToFeedback
} from "../../../../utils/sidebar";

const call = document.querySelector(".contacts__icon-call");
const feedback = document.querySelector(".contacts__icon-chat");

feedback.onclick = () => {
  switchSidebarToFeedback();
  showRightSidebar();
  showBackdrop();

  hideLeftSidebar();
};

call.onclick = () => {
  switchSidebarToCall();
  showRightSidebar();
  showBackdrop();

  hideLeftSidebar();
};
