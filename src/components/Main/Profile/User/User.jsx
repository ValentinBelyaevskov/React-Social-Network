import UserAvatar from "./UserAvatar/UserAvatar"
import UserData from "./UserData/UserData"
import s from './User.module.css'

const User = ({data}) => (
   <div className={s.user}>
      <UserAvatar image={data.avatar} />
      <UserData data={data}/>
   </div>
)

export default User