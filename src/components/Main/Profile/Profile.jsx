// import Posts from "./Posts/Posts";
import User from "./User/User";
import s from "./Profile.module.css";
import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import setSidebarPosition from "../../../lib/setSidebarPosition/setSidebarPosition";

class Profile extends React.Component  {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      setSidebarPosition("sticky");
      // setStartSidebarPosition();
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