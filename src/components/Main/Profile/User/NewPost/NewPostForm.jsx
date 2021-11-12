import React from "react";
import Textarea from "../../../../generic/Textarea";
import s from "./NewPostForm.module.css";
import NewPostIcons from "./NewPostIcons";

const NewPostForm = ({icons, avatar, text, addNewPost, changeNewPostText }) => {
   // console.log('Render: "NewPostForm"')
   return (
      <form className={s.form}>
         <div className={`new-post-form__avatar ${s.newPostFormAvatar}`}>
            <img src={avatar} alt="avatar" />
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
                     value: text,
                     placeholder: "What's happening?",
                  }
               }
               callbacks={
                  {
                     changeText: changeNewPostText,
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
               {icons.map(
                  (item, i) => (
                     <NewPostIcons key={i} number={i} image={item} />
                  )
               )}
            </div>
         </div>
         <button type="button" onClick={() => addNewPost()} className={s.button}>Send</button>
      </form>
   )
}

export default NewPostForm