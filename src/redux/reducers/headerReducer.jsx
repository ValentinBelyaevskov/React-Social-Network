import header from "../data/header";


const changeHeaderSearchText = (state, action) => {
   state.searchText = action.text;
}

const headerSearch = (state, action) => {
   alert(state.searchText)     // ! Здесь должен меняться state!!!
   changeHeaderSearchText(state, {
      ...action ,
      text: "",
   });
}


const initialState = header;


const headerReducer = (state = initialState, action) => {
   switch (action.type) {
      case "CHANGE-HEADER-SEARCH-TEXT":
         changeHeaderSearchText(state, action);
         return state;

      case "HEADER-SEARCH":
         headerSearch(state, action)
         return state;

      default:
         return state;
   }
}

export default headerReducer