import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'

const DialogsItem = ({content}) => (
   <NavLink to={`/Messages/${content.dialogNumber}`}>
      <div className={`${s.dialogsItem} messages__dialogs-item`}>
         <div className={`${s.personAvatar} messages__person-avatar`}>
            <img src={content.image} alt="person avatar" />
         </div>
         <div className={s.personName}>
            {content.name}
         </div>
         <div className={s.personMessage}>
            {content.message}
         </div>
         <div className={s.messageDate}>
            {content.date}
         </div>
      </div>
   </NavLink>
)

export default DialogsItem