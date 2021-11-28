import { fixedScrollListener } from "./fixedScrollListener";
import getSidebarContentHeight from "./getSidebarContentHeight";
import { stickyScrollListener } from "./stickyScrollListener";

let scrollListener;

const setSidebarPositionAndSize = (sidebarPosition, mainComponent) => {
   window.removeEventListener('scroll', scrollListener);
   scrollListener = "undefined";

   const wrapper = document.querySelector(".wrapper");
   const sidebar = document.querySelector(".sidebars");
   const mainSizes = document.querySelector(".main").getBoundingClientRect();
   const sidebarContentHeight = getSidebarContentHeight(mainComponent);

   if (sidebarPosition === "fixed") {
      scrollListener = fixedScrollListener;
   } else if (sidebarPosition === "sticky") {
      scrollListener = () => stickyScrollListener(mainComponent);
   }


   // !
   // let scrollHeight = Math.max(
   //    document.body.scrollHeight, document.documentElement.scrollHeight,
   //    document.body.offsetHeight, document.documentElement.offsetHeight,
   //    document.body.clientHeight, document.documentElement.clientHeight
   //  );
    // console.log( window.innerWidth );
    // console.log( document.documentElement.clientWidth );
    // console.log( document.documentElement.offsetWidth );
    
   //  console.log( wrapper.scrollHeight, window.innerHeight);
    
   //  console.log( window.innerWidth - document.documentElement.clientWidth > 5);
    //  !


   wrapper.style.height = "fit-content";
   if (mainSizes.height < sidebarContentHeight) {
      wrapper.style.height = `${sidebarContentHeight}px`;
      scrollListener = () => {};
      sidebar.style.position = "absolute";
      sidebar.style.height = `${sidebarContentHeight}px`;
   }
   
   if (document.documentElement.offsetHeight < sidebarContentHeight
      && mainSizes.height > sidebarContentHeight) {
      scrollListener = () => stickyScrollListener(mainComponent);
   }
   
   scrollListener();
   window.addEventListener('scroll', scrollListener);

   if (sidebarPosition === "getListener") {
      return scrollListener;
   }
}

export default setSidebarPositionAndSize;