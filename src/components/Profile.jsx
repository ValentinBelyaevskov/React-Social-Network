import NewPost from "./NewPost";
import Posts from "./Posts";
import User from "./User";

const Profile = () => {
   return (
      <div className="profile">
         <User />
         <NewPost />
         <Posts />
      </div>
   )
}

export default Profile;