import NewPostForm from "./NewPostForm"
import s from "./NewPost.module.css"

const NewPost = ({state, appState}) => (
   <section className={`${s.newPost} new-post`}>
      <h2 className={s.header}>New post</h2>
      <NewPostForm image={state.avatar} appState={appState}/>
   </section>
)

export default NewPost