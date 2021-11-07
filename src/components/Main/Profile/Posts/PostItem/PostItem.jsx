import PostAuthor from "./PostAuthor/PostAuthor"
import s from "./PostItem.module.css";
import ButtonsItem from "./PostButtonsItem";

const PostItem = ({ UI, content, post, getFormattedDate}) => {
   return (
      <div className={`${s.postItem} post`}>
         <PostAuthor image={content.user.avatar} name={content.user.name} date={getFormattedDate(post.date, "posts")} />
         <div className={s.postText}>{content.text}</div>
         <div className={`${s.postImage} post__image`}>
            <img src={post.images} alt="" />
         </div>
         <div className={s.postButtons}>
            <ButtonsItem className={s.like} image={UI.buttonsImages.like} value={post.likes}/>
            <ButtonsItem className={s.comment} image={UI.buttonsImages.comment} value={post.comments.length} />
            <ButtonsItem className={s.repost} image={UI.buttonsImages.repost} value={post.reposts} />
         </div>
      </div>
   )
}

export default PostItem