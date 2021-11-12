const getObjClone = (initialObj) => {

   const clone = {};

   const createObjClone = (clone, initialObj) => {
      for (let key in initialObj) {
         clone[key] = { ...initialObj[key] };

         if (typeof initialObj[key] === "object") {
            createObjClone(clone[key], initialObj[key]);
         }
      }
   }

   createObjClone(clone, initialObj)

   return clone
}

export default getObjClone