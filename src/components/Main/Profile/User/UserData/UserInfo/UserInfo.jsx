import UserInfoItem from "./UserInfoItem/UserInfoItem"

const UserInfo = () => (
   <div className="user__info">
      <UserInfoItem property="Date of Birth" value="03.05.1995"/>
      <UserInfoItem property="City" value="Moscow"/>
      <UserInfoItem property="Education" value="Lomonosov MSU"/>
      <UserInfoItem property="E-mail" value="ivanovivan@mail.ru"/>
   </div>
)

export default UserInfo