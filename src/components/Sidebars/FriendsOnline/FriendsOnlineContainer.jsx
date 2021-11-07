import { connect } from "react-redux";
import callSetClassForHoverEv from "../../../lib/callSetClassForHoverEv";
import FriendsOnline from "./FriendsOnline"

const mapStateToProps = (state, ownProps) => {
   return {
      state: state.main.content.friends
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      setHoverClass: () => {
         callSetClassForHoverEv("Messages", "friends-online__person-avatar--active", "friends-online__person-avatar", "friends-online__item");
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsOnline)