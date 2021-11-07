import { connect } from "react-redux"
import ChatHeader from "./ChatHeader"

const mapStateToProps = (state, ownProps) => {
   const content = state.main.content;
   const chatHeaderUI = state.main.UI.chat

   return {
      friends: content.friends,
      icons: chatHeaderUI.icons,
   }
}

export default connect(mapStateToProps, null)(ChatHeader);