import s from "./NewPostHeader.module.css"

const NewPostHeader = ({name}) => (
   <h2 className={s.newPostHeader}>{name}</h2>
)

export default NewPostHeader