import { connect } from "react-redux"
import UserAvatar from "./UserAvatar"

const mapStateToProps = (state) => {
   return {
      image: state.main.content.profile.user.avatar
   }
}

const UserAvatarContainer = connect(mapStateToProps, null)(UserAvatar);

export default UserAvatarContainer