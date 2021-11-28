import React from "react";
import s from "./Chat.module.css";
import ChatEntryFieldContainer from "./ChatEntryFieldContainer";
import ChatFolderContainer from "./ChatFolderContainer";
import ChatHeaderContainer from "./ChatHeaderContainer";

class Chat extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount () {
      this.props.setSidebarPositionAndSize("fixed", "Messages");
      this.props.setPaddingRight();
   }
   
   componentWillUnmount () {
   }

   render () {
      return (
         <div className={`${s.chat} chat`}>
            <ChatHeaderContainer number={this.props.number} dialogId={this.props.dialogId}/>
            <ChatFolderContainer number={this.props.number} dialogId={this.props.dialogId}/>
            <ChatEntryFieldContainer number={this.props.number} dialogId={this.props.dialogId}/>
         </div>
      )
   }
} 

export default Chat