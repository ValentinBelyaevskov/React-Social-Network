import UserAvatar from "./UserAvatar/UserAvatar"
import UserData from "./UserData/UserData"
import s from './User.module.css'
import NewPost from "./NewPost/NewPost"

const User = ({state, appState}) => (
   <div className={s.user}>
      <UserAvatar image={state.avatar} />
      <UserData state={state} appState={appState.userData}/>
      <NewPost state={state} appState={appState.newPost}/>
   </div>
)

export default User