import { connect } from "react-redux"
import ChatHeader from "./ChatHeader"

const mapStateToProps = (state, ownProps) => {
   const content = state.main.content;
   const chatHeaderUI = state.main.UI.chat;
   const dialog = content.messenger.dialogs.find(item => item.dialogId === ownProps.dialogId);
   console.log(dialog)

   return {
      friend: content.friends.find(item => item.name === dialog.name),
      icons: chatHeaderUI.icons,
      number: ownProps.number,
   }
}

export default connect(mapStateToProps, null)(ChatHeader);