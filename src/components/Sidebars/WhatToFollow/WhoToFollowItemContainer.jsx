import { connect } from "react-redux"
import { changeCommunityStatus } from "../../../redux/actionCreators/mainActionCreators"
import WhoToFollowItem from "./WhoToFollowItem"

const mapStateToProps = (state, ownProps) => {
   return {
      content: ownProps.content,
      UI: ownProps.UI,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      callbacks: {
         followButtonClickHandler: (status, community) => {
            let action;
            if (status === "Follow") {
               // ! main reducer
               action = changeCommunityStatus("Unfollow", community);
            } else if (status === "Unfollow") {
               action = changeCommunityStatus("Follow", community);
            }
            
            dispatch(action);
         },
         getFollowButtonText: (text) => {
            return text === "Follow" ? "Unfollow" : "Follow";
         }
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollowItem)