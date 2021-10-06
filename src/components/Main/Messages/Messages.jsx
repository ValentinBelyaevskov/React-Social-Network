import Dialogs from "./Dialogs/Dialogs";
import s from './Messages.module.css'
import MessagesSearch from "./MessagesSearch/MessagesSearch";

const Message = ({state, appState}) => (
   <div className={`${s.messages} messages`}>
      <MessagesSearch appState={appState.messagesSearch}/>
      <Dialogs state={state}/>
   </div>
)

export default Message