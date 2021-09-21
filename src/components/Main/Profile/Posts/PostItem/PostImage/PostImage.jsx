import s from "./PostImage.module.css";

const PostImage = ({image}) => (
   <div className={`${s.postImage} post__image`}>
      <img src={image} alt="" />
   </div>
)

export default PostImage