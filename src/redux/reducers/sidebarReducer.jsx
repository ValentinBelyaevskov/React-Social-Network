import sidebar from "../data/sidebar";


const initialState = sidebar;


const sidebarReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ACTION KEY":
         return state;

      default:
         return state;
   }
}


export default sidebarReducer