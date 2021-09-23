import UserInfoItem from "./UserInfoItem/UserInfoItem"

const UserInfo = ({data}) => (
   <div className="user__info">
      <UserInfoItem property="Date of Birth" value={data.dateOfBirth}/>
      <UserInfoItem property="City" value={data.city}/>
      <UserInfoItem property="Education" value={data.education}/>
      <UserInfoItem property="E-mail" value={data.email}/>
   </div>
)

export default UserInfo