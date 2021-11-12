import { connect } from "react-redux";
import callSetClassForHoverEv from "../../../lib/callSetClassForHoverEv";
import WhoToFollow from "./WhoToFollow";

const mapStateToProps = (state, ownProps) => {
   return {
      UI: state.sidebar.UI.whatToFollow,
      state: state.main.content.communities,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      setHoverClass: () => {
         callSetClassForHoverEv("Profile", "who-to-follow-item__avatar--active", "who-to-follow__avatar", "who-to-follow__item");
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollow);