import { connect } from "react-redux";
import callSetClassForHoverEv from "../../../lib/callSetClassForHoverEv";
import Actual from "./Actual";

const mapStateToProps = (state, ownProps) => {
   const UI = state.sidebar.UI;
   const content = state.sidebar.content;
   return {
      title: UI.whatToFollow.tags,
      actualItems: content.actual,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      setHoverClass: () => {
         callSetClassForHoverEv("Profile", "actual__trend--active", "actual__trend", "actual__item");
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actual);