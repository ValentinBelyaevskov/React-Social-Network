import s from './MessagesIcon.module.css'

const MessagesIcon = ({className, image}) => (
   <div className={`${s.messagesIcon} ${className}`}>
      <img src={image} alt="create a group chat" />
   </div>
)

export default MessagesIcon