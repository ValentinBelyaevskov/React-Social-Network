import s from './DialogsItem.module.css'
import MessageDate from './MessageDate/MessageDate'
import PersonAvatar from './PersonAvatar/PersonAvatar'
import PersonMessage from './PersonMessage/PersonMessage'
import PersonName from './PersonName/PersonName'

const DialogsItem = ({image, name, message, date}) => (
   <div className={`${s.dialogsItem} messages__dialogs-item`}>
      <PersonAvatar image={image}/>
      <PersonName name={name}/>
      <PersonMessage message={message}/>
      <MessageDate date={date}/>
   </div>
)

export default DialogsItem