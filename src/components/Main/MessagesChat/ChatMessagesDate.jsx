import s from "./ChatMessagesDate.module.css";

const ChatMessagesDate = ({date}) => (
   <div className={s.date}>
      {date}
   </div>
)

export default ChatMessagesDate;