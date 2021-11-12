import React from "react";
import setSidebarPosition from "../../../lib/setSidebarPosition/setSidebarPosition";
import s from "./Chat.module.css";
import ChatEntryFieldContainer from "./ChatEntryFieldContainer";
import ChatFolderContainer from "./ChatFolderContainer";
import ChatHeaderContainer from "./ChatHeaderContainer";

class Chat extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount () {
      setSidebarPosition("fixed");
   }

   render () {
      return (
         <div className={`${s.chat} chat`}>
            <ChatHeaderContainer/>
            <ChatFolderContainer/>
            <ChatEntryFieldContainer/>
         </div>
      )
   }
} 

export default Chat