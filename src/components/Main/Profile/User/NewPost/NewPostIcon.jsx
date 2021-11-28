import React from "react";
import setPaddingRight from "../../../../../lib/setPaddingRight";
import setSidebarPositionAndSize from "../../../../../lib/setSidebarPosition/setSidebarPositionAndSize";
import s from "./NewPostIcon.module.css";

class NewPostIcons extends React.Component {
   constructor(props) {
      super(props);
      // this.scrollListener = "undefined";
   }

   render() {
      return (
         <div onLoad={() => {
            if (this.props.number === 3) {
               setSidebarPositionAndSize("fixed", "Profile");
               setPaddingRight()
            }
            // this.setState({loading: false})
         }} key={this.props.number} className={s.iconsItem}>
            <img key={this.props.number} src={this.props.image} alt="New post icon" />
         </div>
      )
   }
}

export default NewPostIcons;