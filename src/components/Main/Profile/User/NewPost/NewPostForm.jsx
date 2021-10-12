import React from "react";
import { addPostActionCreator, changeInputTextActionCreator } from "../../../../../redux/store";
import s from "./NewPostForm.module.css";

const NewPostForm = ({state, appState, dispatch}) => {
   let newPostElement = React.createRef();

   let addNewPost = () => {
      let action = addPostActionCreator();
      dispatch(action);
   }

   let changeText = () => {
      let action = changeInputTextActionCreator(newPostElement.current.value)
      dispatch(action);
   }

   return (
      <form className={s.form}>
         <div className={`new-post-form__avatar ${s.newPostFormAvatar}`}>
            <img src={state.user.avatar} alt="avatar"/>
         </div>
         <input value={state.newPost.text} onInput={changeText} ref={newPostElement} className={`${s.input} new-post__input`} type="text" placeholder="What's happening?" />
         <button type="button" onClick={addNewPost} className={s.button}> Send</button>
         <div className={s.icons}>
            {appState.icons.map(
               (item, i) => (
                  <div key={i} className={s.iconsItem}>
                     <img key={i} src={item} alt="New post icon" />
                  </div>
               )
            )}
         </div>
      </form>
   )
}

export default NewPostForm