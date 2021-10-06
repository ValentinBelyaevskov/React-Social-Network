const setClassForHoverEv = (className, elementSelector, parentSelector) => {
   let actualItems = document.body.querySelectorAll(`.${parentSelector}`);

   const addClass = parent => () => parent.querySelector(`.${elementSelector}`).classList.add(className);
   const removeClass = parent => () => parent.querySelector(`.${elementSelector}`).classList.remove(className);

   const removeEvListeners = item => {
      item.removeEventListener("mouseover",
         addClass(item)
      )
      item.removeEventListener("mouseout",
         removeClass(item)
      )
   }

   const addEvListeners = item => {
      item.addEventListener("mouseover",
         addClass(item)
      )
      item.addEventListener("mouseout",
         removeClass(item)
      )
   }

   let slice = Array.prototype.slice.call(actualItems);
   slice.map(item => {
      removeEvListeners(item);
      addEvListeners(item);
   })
}

export default setClassForHoverEv