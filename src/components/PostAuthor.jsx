import AuthorDate from "./AuthorDate"
import AuthorImage from "./AuthorImage"
import AuthorName from "./AuthorName"

const PostAuthor = ({image, name, date}) => (
   <div className="post__author author">
      <AuthorImage image={image}/>
      <AuthorName name={name}/>
      <AuthorDate date={date}/>
   </div>
)

export default PostAuthor