import setSidebarPosition from "./setSidebarPosition";

const callSetSidebarPosition = (page) => {
   if (page == "Profile") {
      setSidebarPosition("sticky")
   } else {
      setSidebarPosition("fixed")
   }
}

export default callSetSidebarPosition;