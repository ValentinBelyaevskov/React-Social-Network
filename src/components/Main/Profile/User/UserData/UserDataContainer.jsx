import { connect } from "react-redux";
import UserData from "./UserData";

const mapStateToProps = (state, ownProps) => {
   return {
      state: state.main.content.profile.user,
      UI: state.main.UI,
   }
}

const UserDataContainer = connect(mapStateToProps, null)(UserData);

export default UserDataContainer;