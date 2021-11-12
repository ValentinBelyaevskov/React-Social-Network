import React from "react";
import getFormattedDate from "../../../lib/createCivilDate/getFormattedDate";
// import getFormattedDate from "../../../lib/getFormattedDate";
import chatFolderScroll from "./chatFolderScroll";
import s from "./ChatMessage.module.css"

class ChatMessage extends React.Component {
   constructor(props) {
      super(props);
      this.messageAuthor = this.props.messageState.messagesItem.person === "you" ? this.props.messageState.user: this.props.messageState.interlocutor;
      this.dateObj = getFormattedDate(this.props.messageState.messagesItem.date, "message");
      this.time = (
         this.props.messageState.className === "start" ||
         this.props.messageState.firstMessageOfTheDay ||
         (this.props.messageState.timeDifferent > (15 * 60 * 1000))
      ) ?
         this.dateObj.time :
         false;
   }

   componentDidMount() {
      if (this.props.messageState.lastMessage) {
         chatFolderScroll();
      }
   }

   render () {
      // console.log('Render: "ChatMessage"');
      if (this.props.messageState.className === "start" || this.props.messageState.firstMessageOfTheDay || this.time) {
         return (
            <div className={`${s.startMessage}`}>
               <div className={`${s.avatar} chat__person-avatar`}>
                  <img src={this.messageAuthor.avatar} alt="person avatar" />
               </div>
               <div className={s.name}>
                  {this.messageAuthor.name}
               </div>
               <div className={s.date}>
                  {this.time}
               </div>
               <div className={s.text}>
                  {this.props.messageState.messagesItem.messageText}
               </div>
            </div>
         )
      } else if (this.props.messageState.className === "continuation" && !this.props.messageState.firstMessageOfTheDay) {
         return (
            <div className={`${s[this.props.messageState.className]}`}>
               <div className={s.text}>
                  {this.props.messageState.messagesItem.messageText}
               </div>
            </div>
         )
      }
   }





}

export default ChatMessage