import PostAuthor from "./PostAuthor/PostAuthor"
import PostButtons from "./PostButtons/PostButtons"
import PostImage from "./PostImage/PostImage"
import PostText from "./PostText/PostText"
import s from "./PostItem.module.css";

const PostItem = ({image, date, text}) => (
   <div className={`${s.postItem} post`}>
      <PostAuthor image="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" name="Ivan Ivanov" date={date}/>
      <PostText text={text}/>
      <PostImage image={image}/>
      <PostButtons like="4213423-active-favorite-heart-like-love-romantic_115369.svg" comment="comments_alt_icon_125319 (1).svg" repost="share-symbol_icon-icons.com_73418.svg" />
   </div>
)

export default PostItem