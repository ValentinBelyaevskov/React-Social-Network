import { connect } from "react-redux";
import setPaddingRight from "../../../lib/setPaddingRight";
import setSidebarPositionAndSize from "../../../lib/setSidebarPosition/setSidebarPositionAndSize";
import Chat from "./Chat"


const mapStateToProps = (state, ownProps) => {
   return {
      number: ownProps.number,
      dialogId: ownProps.dialogId,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      setSidebarPositionAndSize: setSidebarPositionAndSize,
      setPaddingRight: setPaddingRight,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);