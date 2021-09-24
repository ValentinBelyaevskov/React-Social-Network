import MessagesIcon from './MessagesIcon'
import MessagesSearchForm from './MessagesSearchForm'
import s from './MessagesSearch.module.css'

const MessagesSearch = () => (
   <div className={`${s.messagesSearch} message__search`}>
      <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
         <MessagesSearchForm />
         <MessagesIcon className="messages__icon" image="chat_icon-icons.com_67748.svg" />
         <MessagesIcon className="messages__icon-other" image="ellipsis_icon-icons.com_72770.svg" />
      </div>
   </div>
)

export default MessagesSearch