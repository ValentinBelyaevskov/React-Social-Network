// import renderEntireTree from "../lib/renderEntireTree";
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

   _changeInputText(action) {
      this.state.profile.newPost.text = action.currentText;
      this._subscriber();
   }

   _addPost(action) {
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

      this._changeInputText({ type: "CHANGE-INPUT-TEXT", currentText: "" });
   }

   dispatch(action) {
      if (action.type === "CHANGE-INPUT-TEXT") {
         this._changeInputText(action)

      } else if (action.type === "ADD-POST") {
         this._addPost(action)
      }
   }

}

let store = new Store(stateObj);

export const addPostActionCreator = () => (
   {
      type: "ADD-POST",
   }
)

export const changeInputTextActionCreator = (text) => (
   {
      type: "CHANGE-INPUT-TEXT",
      currentText: text,
   }
)

export { appState, store }