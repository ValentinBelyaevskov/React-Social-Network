import { combineReducers, createStore } from "redux";
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import sidebarReducer from "./reducers/sidebarReducer";

const reducers = combineReducers(
   {
      header: headerReducer,
      main: mainReducer,
      sidebar: sidebarReducer,
   }
)

const store = createStore(reducers);

export default store;