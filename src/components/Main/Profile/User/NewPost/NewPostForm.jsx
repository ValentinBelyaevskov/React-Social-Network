import React from "react";
import { addNewPostActionCreator, changeNewPostTextActionCreator } from "../../../../../redux/store";
import Textarea from "../../../../generic/Textarea";
import s from "./NewPostForm.module.css";

// const NewPostForm = ({ state, appState, dispatch }) => {
class NewPostForm extends React.Component {

   constructor(props) {
      super(props);
   }

   addNewPost() {
      let action = addNewPostActionCreator();
      this.props.dispatch(action);
      action = changeNewPostTextActionCreator("")
      this.props.dispatch(action);
   }

   render() {
      return (
         <form className={s.form}>
            <div className={`new-post-form__avatar ${s.newPostFormAvatar}`}>
               <img src={this.props.state.user.avatar} alt="avatar" />
            </div>
            <div className={s.input}>
               <Textarea
                  textareaState={
                     {
                        style: {
                           margin: "1.5rem 0",
                           padding: "0 0 0 2rem",
                           height: "1.5rem",
                           width: "90%",
                        },
                        value: this.props.state.newPost.text,
                        placeholder: "What's happening?",
                     }
                  }
                  dispatch={this.props.dispatch}
                  callbacks={
                     {
                        changeText: text => {
                           let action = changeNewPostTextActionCreator(text)
                           this.props.dispatch(action)
                        },
                        changeWindowSize: (elem) => {
                           if (elem.scrollHeight < 210) {
                              elem.style.height = "0px";
                              elem.style.height = `${elem.scrollHeight}px`;
                              elem.style.overflow = "hidden"
                           } else {
                              elem.style.overflow = "auto"
                           }
                        }
                     }
                  }
               />
               <div className={s.icons}>
                  {this.props.appState.icons.map(
                     (item, i) => (
                        <div key={i} className={s.iconsItem}>
                           <img key={i} src={item} alt="New post icon" />
                        </div>
                     )
                  )}
               </div>
            </div>
            <button type="button" onClick={() => this.addNewPost()} className={s.button}>Send</button>
         </form>
      )
   }
}

export default NewPostForm