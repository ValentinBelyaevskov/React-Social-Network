import s from './MessagesSearch.module.css'
import MessagesSearchWrapper from './MessagesSearchWrapper/MessagesSearchWrapper'

const MessagesSearch = () => (
   <div className={`${s.messagesSearch} message__search`}>
      <MessagesSearchWrapper/>
   </div>
)

export default MessagesSearch