let currentScroll = 0;
let currentDir = "down";

export const stickyScrollListener = () => {
   currentDir = window.scrollY - currentScroll > 0 ? "down" : "up";

   const sidebar = document.querySelector(".sidebars");
   const main = document.querySelector(".main");
   const sidebarSizes = sidebar.getBoundingClientRect();
   const mainSizes = main.getBoundingClientRect();
   const sidebarFullScroll = document.documentElement.offsetWidth > 1100 ? 900 : 400;

   console.log(sidebarSizes.y, mainSizes.y, mainSizes.height + mainSizes.y, sidebarFullScroll);

   if (mainSizes.y < -sidebarFullScroll && mainSizes.y === sidebarSizes.y
      && (mainSizes.height + mainSizes.y) < sidebarFullScroll) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${mainSizes.height - sidebarFullScroll}px`;
      sidebar.style.height = `${sidebarFullScroll}px`;

      // При первом скролле это действие вызывает небольшое отставание scrollBar

      currentScroll = window.scrollY;
      console.log(1);
      return;
   }

   if (mainSizes.y === sidebarSizes.y && (mainSizes.height + mainSizes.y) > sidebarFullScroll) {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0px";
      sidebar.style.height = `${mainSizes.height + mainSizes.y}px`;

      currentScroll = window.scrollY;
      console.log(2);
      return;
   };

   if (sidebarSizes.y < -sidebarFullScroll && currentDir === "down") {
      sidebar.style.position = "fixed";
      sidebar.style.top = `${sidebarSizes.y}px`;
      sidebar.style.height = `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
      console.log(3);
   }

   if (sidebarSizes.y >= 0 && currentDir === "up") {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0px";

      currentScroll = window.scrollY;
      console.log(4);
      return;
   }

   if ((currentDir === "up") ||
      (sidebarSizes.y === 0 && currentDir === "down")) {
      console.log(5, currentDir);
      sidebar.style.position = "absolute";
      sidebar.style.top = `${-(mainSizes.y - sidebarSizes.y)}px`;
      // sidebar.style.height = `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
      sidebar.style.height = currentDir === "down" ? `${mainSizes.height + mainSizes.y}px`
                                                   : `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
   }

   currentScroll = window.scrollY;
}