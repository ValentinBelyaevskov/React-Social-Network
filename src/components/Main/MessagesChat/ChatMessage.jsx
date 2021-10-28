import s from "./ChatMessage.module.css"

const ChatMessage = ({ className, dialog, interlocutor, user}) => {
   let messageAuthor;

   console.log(className)

   if (dialog.person === "you") {
      messageAuthor = user;
   } else if (dialog.person === "interlocutor") {
      messageAuthor = interlocutor;
   }

   return (
      <div className={`${s[className]} ${s.chatMessage}`}>
         <div className={`${s.avatar} chat__person-avatar`}>
            <img src={messageAuthor.avatar} alt="person avatar" />
         </div>
         <div className={s.name}>
            {messageAuthor.name}
         </div>
         <div className={s.date}>
            {dialog.date}
         </div>
         <div className={s.text}>
            {dialog.message}
         </div>
      </div>
   )
}

export default ChatMessage