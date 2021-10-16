import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem"
import messageShrink from "../../../../lib/messageShrink"

const Dialogs = ({ state }) => (
   <div className={s.dialogs}>
      {state.friends.map((item, i) => (
         <DialogsItem
            key={i}
            content={
               {
                  dialogNumber: i,
                  image: item.avatar,
                  name: item.name,
                  message: messageShrink(state.messages.dialogs[item.name][0].message),
                  date: messageShrink(state.messages.dialogs[item.name][0].date),
               }
            }
         />)
      )}
   </div>
)

export default Dialogs