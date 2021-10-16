import { NavLink } from "react-router-dom"
import s from "./ChatHeader.module.css"

const ChatHeader = ({ state, appState, dispatch }) => (
   <div className={`${s.header} chat-header`}>
      <NavLink className={s.navLink} to="/Messages">
         <button className={s.backButton}>
            <img className={s.backArrow} src={appState.icons.arrow} alt="back" />
            <div className={s.backButtonText}>Back</div>
         </button>
      </NavLink>
      <div className={s.interlocutorName}>
         Aldous Norman
      </div>
      <div className={`${s.interlocutorAvatar} interlocutor-avatar`}>
         <img src={state.friends[0].avatar} alt="interlocutor-avatar" />
      </div>
      <div className={`${s.otherIcon} messages__icon-other`}>
         <img src={appState.icons.other} alt="create a group chat" />
      </div>
   </div>
)

export default ChatHeader