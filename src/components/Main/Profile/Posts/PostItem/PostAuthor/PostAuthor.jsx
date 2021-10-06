import s from "./PostAuthor.module.css";

const PostAuthor = ({ image, name, date }) => (
   <div className={s.postAuthor}>
      <div className={`${s.authorImage} author__image`}>
         <img src={image} alt="" />
      </div>
      <div className={s.authorName}>
         {name}
      </div>
      <div className={s.postDate}>
         {date}
      </div>
   </div>
)

export default PostAuthor