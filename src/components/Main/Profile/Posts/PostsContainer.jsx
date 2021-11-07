import { connect } from "react-redux"
import Posts from "./Posts"

const mapStateToProps = (state, ownProps) => {
   const content = state.main.content;
   const UI = state.main.UI;

   return {
      posts: content.profile.posts,
      content: {
         user: content.profile.user,
         posts: content.profile.posts,
      },
      UI: {
         buttonsImages: UI.profile.posts.postButtonsImg,
      }
   }
}

export default connect(mapStateToProps, null)(Posts)