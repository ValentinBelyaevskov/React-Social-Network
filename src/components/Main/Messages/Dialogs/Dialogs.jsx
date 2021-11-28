import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem"
import SendFirstMessage from "./SendFirstMessage";

const Dialogs = ({ dialogs, friends, functions }) => {

   if (!dialogs.length) return (
      <SendFirstMessage/>
   )

   return (
      <div className={s.dialogs}>
         {dialogs.slice(0).reverse().map((dialogsItem, i) => {
            const friend = friends.find((friendsItem) => friendsItem.name == dialogsItem.name);
            const dateStr = dialogsItem.messages[dialogsItem.messages.length - 1].date

            return (
               <DialogsItem
                  key={i}
                  content={
                     {
                        dialogNumber: i,
                        image: friend.avatar,
                        name: friend.name,
                        message: functions.messageShrink(dialogsItem.messages[dialogsItem.messages.length - 1].messageText),
                        date: functions.getFormattedDate(dateStr, "dialog"),
                        dialogId: dialogsItem.dialogId,
                     }
                  }
               />
            )
         })
         }
      </div>
   )
}

export default Dialogs