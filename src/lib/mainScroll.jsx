let scroll = 0;

const mainScroll = (saveOrClearOrSetScrollValue) => {
   const main = document.querySelector(".main");
   const mainSizes = main.getBoundingClientRect();

   if (saveOrClearOrSetScrollValue === "save") {
      scroll = - mainSizes.y
   }

   if (saveOrClearOrSetScrollValue === "clear") {
      scroll = 0;
   }
   
   if (saveOrClearOrSetScrollValue === "set") {
      document.documentElement.scrollTop = scroll;
   }


}

export default mainScroll