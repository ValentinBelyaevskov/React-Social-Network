
import s from "./Chat.module.css";
import ChatEntryField from "./ChatEntryField";
import ChatFolder from "./ChatFolder";
import ChatHeader from "./ChatHeader";

const Chat = ({ state, appState, dispatch }) => (
   <div className={`${s.chat} chat`}>
      <ChatHeader state={state} appState={appState} dispatch={dispatch}/>
      <ChatFolder state={state} appState={appState} dispatch={dispatch}/>
      <ChatEntryField state={state} appState={appState} dispatch={dispatch}/>
   </div>
)

export default Chat