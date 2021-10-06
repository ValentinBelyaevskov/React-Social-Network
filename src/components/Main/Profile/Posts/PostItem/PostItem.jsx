import PostAuthor from "./PostAuthor/PostAuthor"
import s from "./PostItem.module.css";
import ButtonsItem from "./PostButtonsItem";

const PostItem = ({ state, appState, content}) => (
   <div className={`${s.postItem} post`}>
      <PostAuthor image={state.user.avatar} name={state.user.name} date={content.date} />
      <div className={s.postText}>{content.text}</div>
      <div className={`${s.postImage} post__image`}>
         <img src={content.image} alt="" />
      </div>
      <div className={s.postButtons}>
         <ButtonsItem className={s.like} image={appState.postButtonsImg.like} value={state.posts[content.number].likes}/>
         <ButtonsItem className={s.comment} image={appState.postButtonsImg.comment} value={state.posts[content.number].comments} />
         <ButtonsItem className={s.repost} image={appState.postButtonsImg.repost} value={state.posts[content.number].reposts} />
      </div>
   </div>
)

export default PostItem