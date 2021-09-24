import Dialogs from "./Dialogs/Dialogs";
import s from './Messages.module.css'
import MessagesSearch from "./MessagesSearch/MessagesSearch";

const Message = ({messages}) => (
   <div className={`${s.messages} messages`}>
      <MessagesSearch/>
      <Dialogs messages={messages}/>
   </div>
)

export default Message