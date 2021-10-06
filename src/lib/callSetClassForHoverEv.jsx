import setClassForHoverEv from "./setClassForHoverEv";

const callSetClassForHoverEv = (button, className, elementSelector, parentSelector) => {
   setClassForHoverEv(className, elementSelector, parentSelector);
   document.querySelector(".controls").addEventListener('click', (ev) => {
      if (ev.target.textContent == button) {
         setClassForHoverEv(className, elementSelector, parentSelector);
      }
   })
}

export default callSetClassForHoverEv