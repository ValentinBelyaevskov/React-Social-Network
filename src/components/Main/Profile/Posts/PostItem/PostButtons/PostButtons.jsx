import s from "./PostButtons.module.css";
import ButtonsItem from "./PostButtonsItem";

const PostButtons = ({like, comment, repost}) => (
   <div className={s.postButtons}>
      <ButtonsItem image={like} className="buttons__like" value={23}/>
      <ButtonsItem image={comment} className="buttons__comment" value={0}/>
      <ButtonsItem image={repost} className="buttons__repost" value={0}/>
   </div>
)

export default PostButtons