import Posts from "./Posts/Posts";
import User from "./User/User";
import s from "./Profile.module.css";

const Profile = ({appState, state}) => {
   return (
      <div className={`${s.profile} profile`}>
         <User state={state.user} appState={appState.user} />
         <Posts state={state} appState={appState.posts}/>
      </div>
   )
}

export default Profile;