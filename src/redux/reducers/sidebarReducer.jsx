import sidebar from "../data/sidebar";
import { fromJS, Map } from "immutable";

const initialState = fromJS(sidebar);

const sidebarReducer = (state = initialState, action) => {
   let stateMap = !Map.isMap(state) ? fromJS(state) : state;

   // try {
   //    console.log(stateMap.toJS()["UI"]["controls"] === state["UI"]["controls"]);
   //    console.log(stateMap.toJS()["UI"]["controls"], state["UI"]["controls"]);
   // } catch(err) {
   //    console.log(err.name)
   // }

   // ! Даже при загрузке приложения, в него поступает новый state
   // Это возможно из-за перерисовки всего / многих элементов DOM

   switch (action.type) {
      // case "CHANGE-FOLLOW-BUTTON-TEXT":
      //    return stateMap.setIn(["UI", "whatToFollow", "button"], action.text).toJS();
      case "ACTION-KEY":
         return stateMap.toJS();

      default:
         return stateMap.toJS();
   }
}


export default sidebarReducer