import PostDate from "./PostDate"
import AuthorImage from "./AuthorImage"
import AuthorName from "./AuthorName"
import s from "./PostAuthor.module.css";

const PostAuthor = ({image, name, date}) => (
   <div className={s.postAuthor}>
      <AuthorImage image={image}/>
      <AuthorName name={name}/>
      <PostDate date={date}/>
   </div>
)

export default PostAuthor