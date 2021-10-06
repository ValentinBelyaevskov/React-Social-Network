import UserInfo from "./UserInfo"
import UserName from "./UserName"
import s from "./UserData.module.css"

const UserData = ({state, appState}) => (
   <section className={s.userData}>
      <UserName name={state.name}/>
      <UserInfo state={state} appState={appState}/>
   </section>
)

export default UserData