import getValueWithoutMeasurer from "./getValueWithoutMeasurer";

const setPaddingRight = () => {
   const wrapper = document.querySelector(".wrapper");
   const header = document.querySelector(".header");
   const main = document.querySelector(".main");
   const sidebar = document.querySelector(".sidebars");
   const pageParts = [header, main, sidebar];

   // console.log("Высота всего содержимого и высота окна просмотра", wrapper.scrollHeight, window.innerHeight);
   // console.log("Ширина со скроллбаром и без", window.innerWidth, document.documentElement.clientWidth )

   pageParts.forEach(item => {
      const paddingRight = 50;
      // debugger
      item.style.paddingRight = `${paddingRight - (window.innerWidth - document.documentElement.clientWidth)}px`
   })
}

export default setPaddingRight