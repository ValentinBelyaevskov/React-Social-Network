import s from './MessagesSearch.module.css'

const MessagesSearch = ({appState}) => (
   <div className={`${s.messagesSearch} message__search`}>
      <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
         <form className={s.messagesForm}>
            <div className={s.searchIcon}>
               <img src={appState.searchIcon} alt="message search icon"/>
            </div>
            <input className="messages__search-input" type="text" placeholder="Search"/>
         </form>
         <div className={`${s.messagesIcon} messages__icon`}>
            <img src={appState.groupChatIcon} alt="create a group chat"/>
         </div>
         <div className={`${s.messagesIcon} messages__icon-other`}>
            <img src={appState.otherIcon} alt="create a group chat"/>
         </div>
      </div>
   </div>
)

export default MessagesSearch