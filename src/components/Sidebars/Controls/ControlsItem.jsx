import React from "react";
import { NavLink } from "react-router-dom"
import s from "./ControlsItem.module.css"

class ControlsItem extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
   }

   render() {
      return (
         <li className={`${s.controlsItem} controls__item`}>
            <NavLink to={this.props.to} activeClassName={`${s.activeLink} activeLink`}>
               {this.props.text}
            </NavLink>
         </li>

      )
   }
}

export default ControlsItem