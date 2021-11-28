import { fromJS, Map } from "immutable";
import main from "../data/main";


// * messages, chat
const addNewMessage = (stateMap, action) => {

   // debugger;

   
   let nowStr = new Date().getTime();
   let state = stateMap.toJS();
   
   let newMessageObj = {
      ...state.content.messenger.newMessage,
      date: nowStr,
      person: "you",
      messageText: state.content.messenger.dialogText,
   };
   
   let dialogs = state.content.messenger.dialogs;
   let number = (dialogs.length - 1) - action.number;
   let dialogObj = dialogs[number];
   dialogObj.messages.push(newMessageObj);
   dialogs.push(dialogs.splice(number, 1)[0]);
   // debugger;
   // dialogs = dialogs.splice(number, 1).push(dialogObj);

   return fromJS(state);
}

const changeDialogsSearchText = (stateMap, action) => {
   return stateMap.setIn(["content", "messenger", "search"], action.text);
}

const dialogsSearch = (stateMap, action) => {
   alert(stateMap.toJS().content.messenger.search);     // ! Здесь должен меняться state!!!
}

const changeDialogText = (stateMap, action) => {
   return stateMap.setIn(["content", "messenger", "dialogText"], action.text);
}

// * Profile
const changeNewPostText = (stateMap, action) => {
   return stateMap.setIn(["content", "profile", "newPost", "text"], action.currentText);
}

const addNewPost = (stateMap, action) => {
   let nowStr = new Date().getTime();

   let state = stateMap.toJS();

   let newPostObj = {
      ...state.content.profile.newPost,
      date: nowStr,
   };

   state.content.profile.posts.push(newPostObj);

   return fromJS(state);
}

const changeCommunityStatus = (stateMap, action) => {
   let state = stateMap.toJS();
   let community = state.content.communities.find(item => item.community == action.community);
   community.status = action.status;
   return fromJS(state);
}


const initialState = fromJS(main);


const mainReducer = (state = initialState, action) => {
   let stateMap = !Map.isMap(state) ? fromJS(state) : state;
   let stateCopy = { ...stateMap.toJS() };

   switch (action.type) {
      // * messages, chat
      case "ADD-NEW-MESSAGE":
         // try {
         //    console.log(stateMap.toJS()["UI"]["messages"] === addNewMessage(stateMap, action).toJS()["UI"]["messages"]);
         //    console.log(stateMap.toJS()["UI"]["messages"], addNewMessage(stateMap, action).toJS()["UI"]["messages"]);
         // } catch (err) {
         //    console.log(err.name)
         // }
         let newState = addNewMessage(stateMap, action).toJS()
         console.log(newState)
         return newState;
         // return addNewMessage(stateMap, action).toJS();

      case "DIALOGS-SEARCH":
         dialogsSearch(stateMap, action);
         return stateMap.toJS();

      case "CHANGE-DIALOGS-SEARCH-TEXT":
         return changeDialogsSearchText(stateMap, action).toJS();

      case "CHANGE-DIALOG-TEXT":
         return changeDialogText(stateMap, action).toJS();

      // * Profile
      case "CHANGE-NEW-POST-TEXT":
         return changeNewPostText(stateMap, action).toJS();

      case "ADD-NEW-POST":
         return addNewPost(stateMap, action).toJS();

      // ! Нарушение делегирования
      case "CHANGE-COMMUNITY-STATUS":
         console.log(action.status, action.community);
         return changeCommunityStatus(stateMap, action).toJS();

      default:
         return stateMap.toJS();
   }
}

export default mainReducer