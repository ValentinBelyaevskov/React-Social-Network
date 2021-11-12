import { connect } from "react-redux";
import getFormattedDate from "../../../../lib/createCivilDate/getFormattedDate";
import messageShrink from "../../../../lib/messageShrink";
import Dialogs from "./Dialogs";


const mapStateToProps = (state, ownProps) => {
   const content = state.main.content;

   return {
      dialogs: content.messenger.dialogs,
      friends: content.friends,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      functions: {
         getFormattedDate: (dateStr, page) => {
            return getFormattedDate(dateStr, page);
         },
         messageShrink: (messageText) => {
            return messageShrink(messageText);
         },
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);