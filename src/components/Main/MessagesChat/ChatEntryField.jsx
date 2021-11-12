import s from "./ChatEntryField.module.css"
import Textarea from "../../generic/Textarea";

const ChatEntryField = ({dialogText, icons, functions}) => {
   // console.log('Render: "ChatEntryField"');
   return (
      <form className={s.entryField}>
         <button type="button" className={s.entryFieldButton}>
            <img className={s.attachments} src={icons.attachments} alt="attachments icon" />
         </button>
         <Textarea
            textareaState={
               {
                  style: {
                     margin: "1.5rem 0",
                     height: "1.5rem",
                     width: "100%",
                  },
                  value: dialogText,
                  placeholder: "What's happening?",
               }
            }
            callbacks={
               {
                  changeText: functions.changeText,
                  changeWindowSize: functions.changeWindowSize,
               }
            }
         />
         <button type="button" className={s.entryFieldButton}>
            <img className={s.emoji} src={icons.emoji} alt="emoji icon" />
         </button>
         <button type="button" onClick={functions.sendButtonHandler} className={s.entryFieldButton}>
            <img className={s.sendArrow} src={icons.sendArrow} alt="send arrow icon" />
         </button>
         <div className={s.bottom}></div>
      </form>
   )
}

export default ChatEntryField