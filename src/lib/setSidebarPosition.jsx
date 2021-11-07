import getValueWithoutMeasurer from "./getValueWithoutMeasurer";

let scrollListener;

const setSidebarPosition = (sidebarPosition) => {
   window.removeEventListener('scroll', scrollListener);

   // * Sticky position
   let currentScroll = 0;
   let currentDir = "down";

   const stickyScrollListener = () => {
      currentDir = window.scrollY - currentScroll > 0 ? "down" : "up";

      const sidebar = document.querySelector(".sidebars");
      const main = document.querySelector(".main");
      const sidebarSizes = sidebar.getBoundingClientRect();
      const mainSizes = main.getBoundingClientRect();
      const sidebarFullScroll = document.documentElement.offsetWidth > 1100 ? 950 : 450;

      if (sidebarSizes.y < -sidebarFullScroll && currentDir == "down") {
         sidebar.style.position = "fixed";
         sidebar.style.top = `${sidebarSizes.y}px`;
         sidebar.style.height = `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
      }

      if (sidebarSizes.y >= 0 && currentDir == "up") {
         sidebar.style.position = "fixed";
         sidebar.style.top = "0px";

         currentScroll = window.scrollY;
         return;
      }

      if ((currentDir == "up") ||
         (sidebarSizes.y == 0 && currentDir == "down")) {
         sidebar.style.position = "absolute";
         sidebar.style.top = `${-(mainSizes.y - sidebarSizes.y)}px`;
      }

      currentScroll = window.scrollY;
   }

   // * Fixed position
   const fixedScrollListener = () => {
      document.querySelector(".sidebars").style.position = "fixed";
      document.querySelector(".sidebars").style.top = "0";
   }


   if (sidebarPosition == "fixed") {
      scrollListener = fixedScrollListener;
   } else if (sidebarPosition == "sticky") {
      scrollListener = stickyScrollListener;
   }

   window.addEventListener('scroll', scrollListener);
}

export default setSidebarPosition;