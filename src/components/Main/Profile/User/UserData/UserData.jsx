import UserInfo from "./UserInfo"
import UserName from "./UserName"
import s from "./UserData.module.css"

const UserData = ({state, UI}) => (
   <section className={s.userData}>
      <UserName name={state.name}/>
      <UserInfo state={state} UI={UI.profile.user.userData}/>
   </section>
)

export default UserData