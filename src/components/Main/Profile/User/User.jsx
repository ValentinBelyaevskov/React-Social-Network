import UserAvatar from "./UserAvatar/UserAvatar"
import UserData from "./UserData/UserData"
import s from './User.module.css'
import NewPost from "./NewPost/NewPost"

const User = ({state, appState, dispatch}) => (
   <div className={s.user}>
      <UserAvatar image={state.user.avatar} />
      <UserData state={state.user} appState={appState.userData}/>
      <NewPost state={state} dispatch={dispatch} appState={appState.newPost}/>
   </div>
)

export default User