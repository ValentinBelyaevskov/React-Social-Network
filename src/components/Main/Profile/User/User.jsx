import s from './User.module.css'
import NewPost from "./NewPost/NewPost"
import UserAvatarContainer from "./UserAvatar/UserAvatarContainer"
import UserDataContainer from "./UserData/UserDataContainer"

const User = () => (
   <div className={s.user}>
      <UserAvatarContainer/>
      <UserDataContainer/>
      <NewPost/>
   </div>
)

export default User