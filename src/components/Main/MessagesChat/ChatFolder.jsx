import s from "./ChatFolder.module.css"
import ChatMessage from "./ChatMessage"

const ChatFolder = ({ state, appState, dispatch }) => {
   let interlocutor = state.friends[0];
   let dialog = state.messages.dialogs[interlocutor.name];
   let user = state.profile.user;

   console.log(dialog)

   return (
      <div className={s.chatFolder}>
         <ChatMessage
            key={0}
            className="start"
            interlocutor={interlocutor}
            user={user}
            dialog={dialog[0]}
         />
         {dialog.map(
            (item, i) => {
               if (i > 0) {
                  return (
                     <ChatMessage
                        key={i}
                        className={dialog[i - 1].person === dialog[i].person ? "continuation" : "start"}
                        interlocutor={interlocutor}
                        user={user}
                        dialog={item}
                     />
                  )
               }
            }
         )}
      </div>
   )
}

export default ChatFolder