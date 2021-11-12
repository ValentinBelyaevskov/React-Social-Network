export const fixedScrollListener = () => {
   const sidebars = document.querySelector(".sidebars");
   sidebars.style.position = "fixed";
   sidebars.style.top = "0";
   sidebars.style.height = "100vh";
}