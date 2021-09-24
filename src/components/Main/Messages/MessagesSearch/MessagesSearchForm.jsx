import s from './MessagesSearchForm.module.css'

const MessagesSearchForm = () => (
   <form className={s.messagesForm}>
      <input className="messages__search-input" type="text" placeholder="Search" />
   </form>
)

export default MessagesSearchForm