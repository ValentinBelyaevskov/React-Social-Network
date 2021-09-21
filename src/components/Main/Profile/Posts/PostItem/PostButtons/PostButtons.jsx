import ButtonsComment from "./PostButtonsComment/PostButtonsComment"
import ButtonsLike from "./PostButtonsLike/PostButtonsLike"
import ButtonsRepost from "./PostButtonsRepost/PostButtonsRepost"
import s from "./PostButtons.module.css";

const PostButtons = ({like, comment, repost}) => (
   <div className={s.postButtons}>
      <ButtonsLike image={like}/>
      <ButtonsComment image={comment}/>
      <ButtonsRepost image={repost} />
   </div>
)

export default PostButtons