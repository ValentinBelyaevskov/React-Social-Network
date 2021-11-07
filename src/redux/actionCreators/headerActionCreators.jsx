export const changeHeaderSearchTextActionCreator = text => (
   {
      type: "CHANGE-HEADER-SEARCH-TEXT",
      text: text,
   }
)

export const headerSearchActionCreator = () => (
   {
      type: "HEADER-SEARCH",
   }
)