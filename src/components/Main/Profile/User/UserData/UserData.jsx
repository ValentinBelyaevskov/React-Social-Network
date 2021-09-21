import UserInfo from "./UserInfo/UserInfo"
import UserName from "./UserName/UserName"
import s from "./UserData.module.css"

const UserData = () => (
   <section className={s.userData}>
      <UserName name="Ivanov Ivan"/>
      <UserInfo/>
   </section>
)

export default UserData