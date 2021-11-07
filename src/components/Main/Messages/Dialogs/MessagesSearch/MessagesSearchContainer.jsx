import { connect } from "react-redux"
import { changeDialogsSearchTextActionCreator, dialogsSearchActionCreator } from "../../../../../redux/actionCreators/mainActionCreators";
import MessagesSearch from "./MessagesSearch"

const mapStateToProps = (state, ownProps) => {
   const searchUI = state.main.UI.messages.messagesSearch;

   return {
      searchIcon: searchUI.searchIcon,
      groupChatIcon: searchUI.groupChatIcon,
      otherIcon: searchUI.otherIcon,
      text: state.main.content.messenger.search
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      searchClickListener: () => {
         let action = dialogsSearchActionCreator();
         dispatch(action);
         action = changeDialogsSearchTextActionCreator("");
         dispatch(action);
      },
      inputListener: (text) => {
         let action = changeDialogsSearchTextActionCreator(text);
         dispatch(action);
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesSearch);