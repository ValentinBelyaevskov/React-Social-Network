import main from "../data/main";


// * messages, chat
const addNewMessage = (state, action) => {
   let nowStr = new Date().getTime();

   let newMessageObj = {
      ...state.content.messenger.newMessage,
      date: nowStr,
      person: "you",
      messageText: state.content.messenger.dialogText,
   };

   let dialogObj = state.content.messenger.dialogs.find(item => item.name == "Aldous Norman")
   dialogObj.messages.push(newMessageObj);
}

const changeDialogsSearchText = (state, action) => {
   state.content.messenger.search = action.text;
}

const dialogsSearch = (state, action) => {
   alert(state.content.messenger.search);     // ! Здесь должен меняться state!!!
}

const changeDialogText = (state, action) => {
   state.content.messenger.dialogText = action.text;
}

// * Profile
const changeNewPostText = (state, action) => {
   state.content.profile.newPost.text = action.currentText;
}

const addNewPost = (state, action) => {
   let nowStr = new Date().getTime();
   console.log(state)

   let newPostObj = {
      ...state.content.profile.newPost,
      date: nowStr,
   };

   state.content.profile.posts.push(newPostObj);

   // debugger
}


const initialState = main;


const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      // * messages, chat
      case "ADD-NEW-MESSAGE":
         addNewMessage(state, action);
         return state;

      case "DIALOGS-SEARCH":
         dialogsSearch(state, action);
         return state;

      case "CHANGE-DIALOGS-SEARCH-TEXT":
         changeDialogsSearchText(state, action);
         return state;

      case "CHANGE-DIALOG-TEXT":
         changeDialogText(state, action);
         return state;

      // * Profile
      case "CHANGE-NEW-POST-TEXT":
         changeNewPostText(state, action)
         return state;

      case "ADD-NEW-POST":
         addNewPost(state, action);

         return state;

      default:
         return state;
   }
}

export default mainReducer