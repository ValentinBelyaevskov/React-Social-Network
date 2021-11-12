import { fixedScrollListener } from "./fixedScrollListener";
import { stickyScrollListener } from "./stickyScrollListener";

let scrollListener;

const setSidebarPosition = (sidebarPosition) => {
   console.log(`setSidebarPosition: ${sidebarPosition}`)
   window.removeEventListener('scroll', scrollListener);

   if (sidebarPosition == "fixed") {
      scrollListener = fixedScrollListener;
      fixedScrollListener()
      console.log("fixedScrollListener worked")
   } else if (sidebarPosition == "sticky") {
      scrollListener = stickyScrollListener;
      // stickyScrollListener()
      // console.log("stickyScrollListener worked")
   }

   window.addEventListener('scroll', scrollListener);
}

export default setSidebarPosition;