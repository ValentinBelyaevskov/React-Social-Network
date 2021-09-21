import NewPostButton from "./NewPostButton/NewPostButton"
import NewPostInput from "./NewPostInput/NewPostInput"
import s from "./NewPostForm.module.css"

const NewPostForm = () => (
   <form className={s.newPostForm}>
      <NewPostInput/>
      <NewPostButton/>
   </form>
)

export default NewPostForm