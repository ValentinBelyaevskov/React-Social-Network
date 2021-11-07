import { connect } from "react-redux"
import { addNewMessageActionCreator, changeDialogTextActionCreator } from "../../../redux/actionCreators/mainActionCreators"
import ChatEntryField from "./ChatEntryField"

const mapStateToProps = (state, ownProps) => {
   return {
      icons: state.main.UI.chat.icons,
      dialogText: state.main.content.messenger.dialogText,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      functions: {
         sendButtonHandler: () => {
            let action = addNewMessageActionCreator();
            dispatch(action);
            action = changeDialogTextActionCreator("")
            dispatch(action);
         },
         changeText: text => {
            let action = changeDialogTextActionCreator(text)
            dispatch(action)
         },
         changeWindowSize: elem => {
            if (elem.scrollHeight < 165) {
               elem.style.height = "0px";
               elem.style.height = `${elem.scrollHeight}px`;
               elem.style.overflow = "hidden"
            } else {
               elem.style.overflow = "auto"
            }
         }
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatEntryField);