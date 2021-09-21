import s from "./PostText.module.css";

const PostText = ({text}) => (
   <div className={s.postText}>{text}</div>
)

export default PostText