import NewPostForm from "./NewPostForm"
import NewPostHeader from "./NewPostHeader"

const NewPost = () => (
   <section className="new-post">
      <NewPostHeader name="New post"/>
      <NewPostForm/>
   </section>
)

export default NewPost