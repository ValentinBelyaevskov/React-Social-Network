export const fixedScrollListener = () => {
   const main = document.querySelector(".main");

   if (main.getBoundingClientRect().height < document.documentElement.offsetHeight) return;

   const sidebars = document.querySelector(".sidebars");

   sidebars.style.position = "fixed";
   sidebars.style.top = "0";
   sidebars.style.height = "100vh";
}