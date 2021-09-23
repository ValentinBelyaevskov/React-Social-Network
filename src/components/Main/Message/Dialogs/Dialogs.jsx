import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"

const messageShrink = message => (
   message.length > 40 ? `${message.split("").slice(0, 40).join("")}...` : message
)

const Dialogs = ({messages}) => (
   <div className={s.dialogs}>
      {messages.map(item => (
         <DialogsItem
            image={item.avatar}
            name={item.name}
            message={messageShrink(item.message)}
            date={item.date}
         />)
      )}
   </div>
)

export default Dialogs