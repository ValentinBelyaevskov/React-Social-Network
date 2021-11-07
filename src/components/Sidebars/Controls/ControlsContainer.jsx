import { connect } from "react-redux";
import Controls from "./Controls";


const mapStateToProps = state => {
   return {
      controlsButtons: state.sidebar.UI.controls,
   }
}

const ControlsContainer = connect(mapStateToProps, null)(Controls);

export default ControlsContainer