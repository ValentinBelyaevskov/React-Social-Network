// * messages
export const addNewMessageActionCreator = () => (
   {
      type: "ADD-NEW-MESSAGE",
      interlocutor: "",
   }
)

export const dialogsSearchActionCreator = () => (
   {
      type: "DIALOGS-SEARCH",
   }
)

export const changeDialogsSearchTextActionCreator = text => (
   {
      type: "CHANGE-DIALOGS-SEARCH-TEXT",
      text: text,
   }
)

export const changeDialogTextActionCreator = text => (
   {
      type: "CHANGE-DIALOG-TEXT",
      text: text,
   }
)

// * profile
export const addNewPostActionCreator = () => (
   {
      type: "ADD-NEW-POST",
   }
)

export const changeNewPostTextActionCreator = text => (
   {
      type: "CHANGE-NEW-POST-TEXT",
      currentText: text,
   }
)

export const changeCommunityStatus = (status, community) => (
   {
      type: "CHANGE-COMMUNITY-STATUS",
      status: status,
      community: community,
   }
)