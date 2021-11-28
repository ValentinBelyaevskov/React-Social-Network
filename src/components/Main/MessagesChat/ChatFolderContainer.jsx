import { connect } from "react-redux"
import getFormattedDate from "../../../lib/createCivilDate/getFormattedDate";
// import getFormattedDate from "../../../lib/getFormattedDate";
import ChatFolder from "./ChatFolder"
import ChatMessage from "./ChatMessage";

const mapStateToProps = (state, ownProps) => {
   const content = state.main.content;
   const dialog = content.messenger.dialogs.find(item => item.dialogId === ownProps.dialogId);
   const messenger = content.messenger;
   const profile = content.profile;
   const interlocutor = content.friends.find(item => item.name === dialog.name);
   const messagesArr = messenger.dialogs.find(item => item.name === interlocutor.name).messages
   const user = profile.user;
   const firstMessageDate = getFormattedDate(messagesArr[0].date, "message").date;

   return {
      messagesArr: messagesArr,
      content: content,
      firstMessageDate: firstMessageDate,
      messageState: {
         interlocutor: interlocutor,
         user: user,
         className: "start",
         messagesItem: messagesArr[0],
         firstMessageOfTheDay: true,
      }
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      getFormattedDate: (dateStr, page) => {
         return getFormattedDate(dateStr, page);
      },

      getChatMessage: (i, messagesState) => {
         return (
            <ChatMessage
               key={i}
               messageState={messagesState}
            />
         )
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFolder);