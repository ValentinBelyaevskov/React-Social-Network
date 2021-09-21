import AuthorDate from "./AuthorDate/AuthorDate"
import AuthorImage from "./AuthorImage/AuthorImage"
import AuthorName from "./AuthorName/AuthorName"
import s from "./PostAuthor.module.css";

const PostAuthor = ({image, name, date}) => (
   <div className={s.postAuthor}>
      <AuthorImage image={image}/>
      <AuthorName name={name}/>
      <AuthorDate date={date}/>
   </div>
)

export default PostAuthor