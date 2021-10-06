import s from "./NewPostForm.module.css"

const NewPostForm = ({image, appState}) => (
   <form className={s.form}>
      <div className={`new-post-form__avatar ${s.newPostFormAvatar}`}>
         <img src={image} alt="avatar"/>
      </div>
      <input className={`${s.input} new-post__input`} type="text" placeholder="What's happening?" />
      <button className={s.button}> Send</button>
      <div className={s.icons}>
         {appState.icons.map(
            (item, i) => (
               <div key={i} className={s.iconsItem}>
                  <img key={i} src={item} alt="New post icon"/>
               </div>
            )
         )}
      </div>
   </form>
)

export default NewPostForm