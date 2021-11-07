import s from "./Chat.module.css";
import ChatEntryFieldContainer from "./ChatEntryFieldContainer";
import ChatFolderContainer from "./ChatFolderContainer";
import ChatHeaderContainer from "./ChatHeaderContainer";

const Chat = () => (
   <div className={`${s.chat} chat`}>
      <ChatHeaderContainer/>
      <ChatFolderContainer/>
      <ChatEntryFieldContainer/>
   </div>
)

export default Chat