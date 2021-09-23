import MessagesIcon from './MessagesIcon/MessagesIcon'
import MessagesSearchForm from './MessagesSearchForm/MessagesSearchForm'
import s from './MessagesSearchWrapper.module.css'

const MessagesSearchWrapper = () => (
   <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
      <MessagesSearchForm/>
      <MessagesIcon className="messages__icon" image="chat_icon-icons.com_67748.svg"/>
      <MessagesIcon className="messages__icon-other" image="ellipsis_icon-icons.com_72770.svg"/>
   </div>
)

export default MessagesSearchWrapper