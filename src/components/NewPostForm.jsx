import NewPostButton from "./NewPostButton"
import NewPostInput from "./NewPostInput"

const NewPostForm = () => (
   <form className="new-post__form">
      <NewPostInput/>
      <NewPostButton/>
   </form>
)

export default NewPostForm