import s from "./NewPostInput.module.css"

const NewPostInput = () => (
   <input className={`${s.newPostInput} new-post__input`} type="text" placeholder="Your news" />
)

export default NewPostInput