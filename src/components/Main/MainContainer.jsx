import { connect } from "react-redux"
import Main from "./Main"

const mapStateToProps = (state, ownProps) => {
   return {
      dialogs: state.main.content.messenger.dialogs,
   }
}

export default connect(mapStateToProps)(Main)