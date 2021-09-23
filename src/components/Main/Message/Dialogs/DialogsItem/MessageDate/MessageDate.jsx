import s from './MessageDate.module.css'

const MessageDate = ({date}) => (
   <div className={s.messageDate}>
      {date}
   </div>
)

export default MessageDate