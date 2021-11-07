import React from "react";
import s from "./ChatFolder.module.css"
import chatFolderScroll from "./chatFolderScroll";
import ChatMessagesDate from "./ChatMessagesDate";
import SendFirstMessage from "./SendFirstMessage";

class ChatFolder extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      chatFolderScroll();
   }

   render() {
      if (!this.props.messagesArr.length) return (
         <SendFirstMessage />
      )

      return (
         <div className={`${s.chatFolder} chat-folder`}>

            <ChatMessagesDate date={this.props.firstMessageDate} />
            {this.props.getChatMessage(0, this.props.messageState)}

            {this.props.messagesArr.slice(1).map(
               (item, i, arr) => {
                  const date = this.props.getFormattedDate(item.date, "message").date;
                  const previousDate = this.props.getFormattedDate(this.props.messagesArr[(i + 1) - 1].date, "message").date;
                  const timeDifferent = new Date(item.date).getTime() - new Date(this.props.messagesArr[(i + 1) - 1].date).getTime()
                  const messageClassName = this.props.messagesArr[(i + 1) - 1].person === this.props.messagesArr[(i + 1)].person ? "continuation" : "start"
                  const messagesDate = date !== previousDate ? date : false;
                  const lastMessage = i === (arr.length - 1) ? true : false;
                  const messageState = {
                     ...this.props.messageState,
                     className: messageClassName,
                     messagesItem: item,
                     firstMessageOfTheDay: messagesDate ? true : false,
                     timeDifferent: timeDifferent,
                     lastMessage: lastMessage,
                  }

                  if (messagesDate) {
                     return (
                        <div>
                           <ChatMessagesDate date={messagesDate} />
                           {this.props.getChatMessage(i + 1, messageState)}
                        </div>
                     )
                  }
                  else {
                     return (
                        <div>
                           {this.props.getChatMessage(i + 1, messageState)}
                        </div>
                     )
                  }
               }
            )}

         </div>
      )
   }
}

export default ChatFolder