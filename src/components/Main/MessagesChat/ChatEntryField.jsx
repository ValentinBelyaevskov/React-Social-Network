import s from "./ChatEntryField.module.css"
import { changeDialogTextActionCreator } from "../../../redux/store";
import Textarea from "../../generic/Textarea";

const ChatEntryField = ({ state, appState, dispatch }) => (
   <form className={s.entryField}>
      {/* <button className={s.entryFieldButton}> */}
         <img className={s.attachments} src={appState.icons.attachments} alt="attachments icon" />
      {/* </button> */}
      <Textarea
         textareaState={
            {
               style: {
                  margin: "1.5rem 0",
                  height: "1.5rem",
                  width: "100%",
               },
               value: state.messages.dialogText,
               placeholder: "What's happening?",
            }
         }
         dispatch={dispatch}
         callbacks={
            {
               changeText: text => {
                  let action = changeDialogTextActionCreator(text)
                  dispatch(action)
               },
               changeWindowSize: (elem) => {
                  if (elem.scrollHeight < 165) {
                     elem.style.height = "0px";
                     elem.style.height = `${elem.scrollHeight}px`;
                     elem.style.overflow = "hidden"
                  } else {
                     elem.style.overflow = "auto"
                  }
               }
            }
         }
      />
      {/* <button className={s.entryFieldButton}> */}
         <img className={s.emoji} src={appState.icons.emoji} alt="emoji icon" />
      {/* </button> */}
      <button className={s.entryFieldButton}>
         <img className={s.sendArrow} src={appState.icons.sendArrow} alt="send arrow icon" />
      </button>
      <div className={s.bottom}></div>
   </form>
)

export default ChatEntryField