import appData from "./appData/appData";
import friends from "./usersData/friends";
import messages from "./usersData/messages";
import profile from "./usersData/profile";
import whatToFollow from "./usersData/whatToFollow";

const appState = appData;
const stateObj = { friends, messages, profile, whatToFollow };

class Store {

   constructor(stateObj) {
      this.state = stateObj;
   }

   _subscriber() {
      console.log(this);
   }

   subscribe(observer) {
      this._subscriber = observer;
   }


   _changeNewPostText(action) {
      this.state.profile.newPost.text = action.currentText;
      this._subscriber();
   }

   _addNewPost(action) {
      let mounths = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let civilDate = {
         year: new Date().getFullYear(),
         mounth: mounths[new Date().getMonth()],
         day: new Date().getDate(),
         hours: new Date().getHours() > 9 ? new Date().getHours() : `0${new Date().getHours()}`,
         minutes: new Date().getMinutes() > 9 ? new Date().getMinutes() : `0${new Date().getMinutes()}`,
      };

      let newPostObj = {
         ...this.state.profile.newPost,
         date: `${civilDate.mounth} ${civilDate.day} ` + `at ${civilDate.hours}:${civilDate.minutes}`,
      };

      this.state.profile.posts.unshift(newPostObj);

      this._subscriber();
   }

   _dialogsSearch(action) {
      alert(this.state.messages.search);
   }

   _changeDialogsSearchText(action) {
      this.state.messages.search = action.text;
      this._subscriber();
   }

   _changeDialogText(action) {
      this.state.messages.dialogText = action.text;
      this._subscriber();
   }

   dispatch(action) {
      if (action.type === "CHANGE-NEW-POST-TEXT") {
         this._changeNewPostText(action);
      } else if (action.type === "ADD-NEW-POST") {
         this._addNewPost(action);
      } else if (action.type === "DIALOGS-SEARCH") {
         this._dialogsSearch(action);
      } else if (action.type === "CHANGE-DIALOGS-SEARCH-TEXT") {
         this._changeDialogsSearchText(action);
      } else if (action.type === "CHANGE-DIALOG-TEXT") {
         this._changeDialogText(action);
      }
   }
}

let store = new Store(stateObj);

export const addNewPostActionCreator = () => (
   {
      type: "ADD-NEW-POST",
   }
)

export const changeNewPostTextActionCreator = (text) => (
   {
      type: "CHANGE-NEW-POST-TEXT",
      currentText: text,
   }
)

export const dialogsSearchActionCreator = () => (
   {
      type: "DIALOGS-SEARCH",
   }
)

export const changeDialogsSearchTextActionCreator = (text) => (
   {
      type: "CHANGE-DIALOGS-SEARCH-TEXT",
      text: text,
   }
)

export const changeDialogTextActionCreator = (text) => (
   {
      type: "CHANGE-DIALOG-TEXT",
      text: text,
   }
)

export { appState, store }