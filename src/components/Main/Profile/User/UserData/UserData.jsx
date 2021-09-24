import UserInfo from "./UserInfo"
import UserName from "./UserName"
import s from "./UserData.module.css"

const UserData = ({data}) => (
   <section className={s.userData}>
      <UserName name={data.name}/>
      <UserInfo data={data}/>
   </section>
)

export default UserData