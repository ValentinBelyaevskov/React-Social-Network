import NewPostForm from "./NewPostForm"
import s from "./NewPost.module.css"

const NewPost = ({state, appState, dispatch}) => {
   // state._subscriber()
   return (
      <section className={`${s.newPost} new-post`}>
         <h2 className={s.header}>New post</h2>
         <NewPostForm dispatch={dispatch} state={state} appState={appState}/>
      </section>
   )
}




export default NewPost