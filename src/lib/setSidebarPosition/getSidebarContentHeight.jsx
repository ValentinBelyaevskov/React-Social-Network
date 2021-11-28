const getSidebarContentHeight = mainComponent => {
   let minSidebarFullScroll;
   let maxSidebarFullScroll;
   let limitWidth;

   if (mainComponent === "Profile") {
      minSidebarFullScroll = 450;
      maxSidebarFullScroll = 850;
      limitWidth = 1130;
   } else if (mainComponent === "Messages") {
      minSidebarFullScroll = 360;
      maxSidebarFullScroll = 580;
      limitWidth = 1130;
   }

   const sidebarContentHeight = document.documentElement.offsetWidth > limitWidth ?
      maxSidebarFullScroll : minSidebarFullScroll;

   return sidebarContentHeight;
}

export default getSidebarContentHeight;