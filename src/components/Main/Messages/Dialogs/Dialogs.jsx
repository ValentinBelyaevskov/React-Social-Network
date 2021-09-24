import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem"
import messageShrink from "../../../../lib/messageShrink"

const Dialogs = ({messages}) => (
   <div className={s.dialogs}>
      {messages.map((item, i) => (
         <DialogsItem
            key={i}
            image={item.avatar}
            name={item.name}
            message={messageShrink(item.message)}
            date={item.date}
         />)
      )}
   </div>
)

export default Dialogs