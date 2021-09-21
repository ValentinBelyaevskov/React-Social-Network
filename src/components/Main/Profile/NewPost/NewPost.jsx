import NewPostForm from "./NewPostForm/NewPostForm"
import NewPostHeader from "./NewPostHeader/NewPostHeader"
import s from "./NewPost.module.css"

const NewPost = () => (
   <section className={s.newPost}>
      <NewPostHeader name="New post"/>
      <NewPostForm/>
   </section>
)

export default NewPost