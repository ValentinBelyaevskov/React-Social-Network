import Dialogs from "./Dialogs/Dialogs";
import s from './Messages.module.css'
import MessagesSearch from "./Dialogs/MessagesSearch/MessagesSearch";

const Messages = ({state, appState, dispatch}) => (
   <div className={`${s.messages} messages`}>
      <MessagesSearch dispatch={dispatch} state={state.messages.search} appState={appState.messagesSearch}/>
      <Dialogs state={state}/>
   </div>
)

export default Messages