// import Posts from "./Posts/Posts";
import User from "./User/User";
import s from "./Profile.module.css";
import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import setPaddingRight from "../../../lib/setPaddingRight";
import mainScroll from "../../../lib/mainScroll";

class Profile extends React.Component  {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      setPaddingRight();
      mainScroll("clear");
   }

   componentWillUnmount () {
   }

   render() {
      return (
         <div className={`${s.profile} profile`}>
            <User/>
            <PostsContainer/>
         </div>
      )
   }
}

export default Profile;