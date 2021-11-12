import { connect } from "react-redux"
import { addNewPostActionCreator, changeNewPostTextActionCreator } from "../../../../../redux/actionCreators/mainActionCreators"
import NewPostForm from "./NewPostForm"

const mapStateToProps = (state, ownProps) => {
   const user = state.main.content.profile.user;
   const newPost = state.main.content.profile.newPost;

   return {
      avatar: user.avatar,
      text: newPost.text,
      icons: state.main.UI.profile.user.newPost.icons,
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      addNewPost: () => {
         let action = addNewPostActionCreator();
         dispatch(action);
   
         action = changeNewPostTextActionCreator("");
         dispatch(action);
      },

      changeNewPostText: (text) => {
         let action = changeNewPostTextActionCreator(text);
         dispatch(action);
      },
   }
}

const NewPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostForm)

export default NewPostFormContainer