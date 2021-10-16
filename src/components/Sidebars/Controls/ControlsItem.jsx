import React from "react";
import { NavLink } from "react-router-dom"
import callSetSidebarPosition from "../../../lib/callSetSidebarPosition";
import zeroingTheScroll from "../../../lib/zeroingTheScroll"
import s from "./ControlsItem.module.css"

class ControlsItem extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      if (document.querySelector(".activeLink")) {
         callSetSidebarPosition(document.querySelector(".activeLink").textContent);
      }
   }

   render() {
      return (
         <li className={`${s.controlsItem} controls__item`}>
            <NavLink to={this.props.to} activeClassName={`${s.activeLink} activeLink`} onClick={(ev) => {
               zeroingTheScroll();
               callSetSidebarPosition(ev.target.textContent);
            }}>
               {this.props.text}
            </NavLink>
         </li>

      )
   }
}

export default ControlsItem