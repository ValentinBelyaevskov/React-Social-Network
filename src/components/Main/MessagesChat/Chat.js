import React from "react";
import setPaddingRight from "../../../lib/setPaddingRight";
import setSidebarPositionAndSize from "../../../lib/setSidebarPosition/setSidebarPositionAndSize";
import s from "./Chat.module.css";
import ChatEntryFieldContainer from "./ChatEntryFieldContainer";
import ChatFolderContainer from "./ChatFolderContainer";
import ChatHeaderContainer from "./ChatHeaderContainer";

class Chat extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount () {
      setSidebarPositionAndSize("fixed", "Messages");
      setPaddingRight();
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