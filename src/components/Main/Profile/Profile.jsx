import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import User from "./User/User";
import s from "./Profile.module.css"

const Profile = () => {
   return (
      <div className={s.profile}>
         <User />
         <NewPost />
         <Posts />
      </div>
   )
}

export default Profile;