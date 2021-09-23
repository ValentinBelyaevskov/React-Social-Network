import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import User from "./User/User";
import s from "./Profile.module.css";

const Profile = ({data}) => {
   return (
      <div className={`${s.profile} profile`}>
         <User data={data.myProfile} />
         <NewPost />
         <Posts data={data.myPosts}/>
      </div>
   )
}

export default Profile;