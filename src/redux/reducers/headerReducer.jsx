import { fromJS, Map } from "immutable";
import header from "../data/header";

const initialState = fromJS(header);

const headerReducer = (state = initialState, action) => {
   let stateMap = !Map.isMap(state) ? fromJS(state) : state;

   switch (action.type) {
      case "CHANGE-HEADER-SEARCH-TEXT":
         return stateMap.set("searchText", action.text).toJS();

      case "HEADER-SEARCH":
         alert(stateMap.toJS().searchText);
         return stateMap.set("searchText", "").toJS();

      default:
         return stateMap.toJS()
   }
}

export default headerReducer