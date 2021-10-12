import React from 'react'
import s from './MessagesSearch.module.css'


const MessagesSearch = ({ appState }) => {
   let messagesSearchText = React.createRef();

   let searchListener = () => {
      let text = messagesSearchText.current.value;
      alert(text);
   }

   return (<div className={`${s.messagesSearch} message__search`}>
      <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
         <form className={s.messagesForm}>
            <div onClick={searchListener} className={s.searchIcon}>
               <img src={appState.searchIcon} alt="message search icon" />
            </div>
            <input ref={messagesSearchText} className="messages__search-input" type="text" placeholder="Search" />
         </form>
         <div className={`${s.messagesIcon} messages__icon`}>
            <img src={appState.groupChatIcon} alt="create a group chat" />
         </div>
         <div className={`${s.messagesIcon} messages__icon-other`}>
            <img src={appState.otherIcon} alt="create a group chat" />
         </div>
      </div>
   </div>)
}

export default MessagesSearch