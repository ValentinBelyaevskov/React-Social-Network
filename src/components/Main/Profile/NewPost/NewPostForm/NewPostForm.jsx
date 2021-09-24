import NewPostButton from "./NewPostButton"
import NewPostInput from "./NewPostInput"
import s from "./NewPostForm.module.css"

const NewPostForm = () => (
   <form className={s.newPostForm}>
      <NewPostInput/>
      <NewPostButton/>
   </form>
)

export default NewPostForm