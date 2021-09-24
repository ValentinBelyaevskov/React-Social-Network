import PostAuthor from "./PostAuthor/PostAuthor"
import PostButtons from "./PostButtons/PostButtons"
import PostImage from "./PostImage/PostImage"
import PostText from "./PostText/PostText"
import s from "./PostItem.module.css";
import appData from "../../../../../data/appData/appData";
import profileData from "../../../../../data/userData/profileData";

const PostItem = ({image, date, text}) => (
   <div className={`${s.postItem} post`}>
      <PostAuthor image={profileData.myProfile.avatar} name={profileData.myProfile.name} date={date}/>
      <PostText text={text}/>
      <PostImage image={image}/>
      <PostButtons
         like={appData.profilePage.postButtonsImg.like}
         comment={appData.profilePage.postButtonsImg.comment}
         repost={appData.profilePage.postButtonsImg.repost}
      />
   </div>
)

export default PostItem