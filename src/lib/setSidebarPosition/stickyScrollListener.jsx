import getValueWithoutMeasurer from "../getValueWithoutMeasurer";
import getSidebarContentHeight from "./getSidebarContentHeight";

let currentScroll = 0;
let currentDir = "down";

export const stickyScrollListener = (mainComponent) => {
   currentDir = window.scrollY - currentScroll > 0 ? "down" : "up";
   if (window.scrollY - currentScroll === 0) currentDir = "undefined";

   const sidebar = document.querySelector(".sidebars");
   const main = document.querySelector(".main");
   const sidebarSizes = sidebar.getBoundingClientRect();
   const mainSizes = main.getBoundingClientRect();
   // let minSidebarFullScroll;
   // let maxSidebarFullScroll;
   // let limitWidth;

   const sidebarFullScroll = getSidebarContentHeight(mainComponent);

   // * Перезагрузка страницы с ненулевым скроллом
   // Если Sidebar находится на одном уровне с Main
   // и расстояние до "верхнего края Main" больше чем высота содержимого Sidebar
   // и расстояние до "нижнего края Main" меньше чем высота содержимого Sidebar
   // Зафиксировать Sidebar на уровне окна. Нижний край Sidebar
   // при этом находится на уровне с нижним краем Main
   // Происходит при перезагрузке страницы, с ненулевым скроллом (скролл максимальный).
   if (mainSizes.y === sidebarSizes.y && (mainSizes.height + mainSizes.y) < sidebarFullScroll
      && mainSizes.y < -sidebarFullScroll) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${mainSizes.height - sidebarFullScroll}px`;
      // !        1)
      sidebar.style.height = `${sidebarFullScroll}px`;
      // При первом скролле это действие вызывает небольшое отставание scrollBar

      currentScroll = window.scrollY;
      // console.log(1);
      return;
   }

   // Если Sidebar находится на одном уровне с Main
   // и расстояние до "нижнего края Main" больше чем высота содержимого Sidebar
   // Зафиксировать Sidebar на уровне окна
   // Происходит при перезагрузке страницы, с ненулевым скроллом.
   if (mainSizes.y === sidebarSizes.y && (mainSizes.height + mainSizes.y) > sidebarFullScroll) {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0px";
      // !        2)
      sidebar.style.height = `${mainSizes.height + mainSizes.y}px`;
      currentScroll = window.scrollY;
      // console.log(2);
      return;
   };

   // * Скролл страницы
   // Если Sidebar полностью скрыт и идёт скролл вниз
   // Зафиксировать Sidebar в окне просмотра
   if (sidebarSizes.y < - sidebarFullScroll && currentDir === "down") {
      sidebar.style.position = "fixed";
      sidebar.style.top = `${sidebarSizes.y}px`;
      // !        1)
      sidebar.style.height = `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
      currentScroll = window.scrollY;
      // console.log(3);
      return;
   }

   // Если Sidebar вылез полностью и идёт скролл вверх
   // Зафиксировать Sidebar "над окном просмотра".
   if (sidebarSizes.y >= 0 && currentDir === "up") {
      sidebar.style.position = "fixed";
      sidebar.style.top = "0px";
      sidebar.style.height = `${mainSizes.height + mainSizes.y}px`;
      currentScroll = window.scrollY;
      // console.log(4, window.scrollY);
      return;
   }

   // Если Sidebar полностью виден и идёт скролл вниз
   // или Sidebar вылез не полностью и идёт скролл вверх,
   // Sidebar должен прокручиваться со всей страницей
   if ((currentDir === "up") ||
      (sidebarSizes.y === 0 && currentDir === "down")) {
      sidebar.style.position = "absolute";
      sidebar.style.top = `${-(mainSizes.y - sidebarSizes.y)}px`;
      // sidebar.style.height = currentDir === "down" ?
      //    `${mainSizes.height + mainSizes.y}px`
      //    : `${-sidebarSizes.y + document.documentElement.offsetHeight}px`;
      sidebar.style.height = `${mainSizes.height - getValueWithoutMeasurer(getComputedStyle(sidebar).top, 2)}px`;
      // console.log(5, currentDir);
   }

   currentScroll = window.scrollY;
}