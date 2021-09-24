import { NavLink } from "react-router-dom"
import s from "./SidebarItem.module.css"

const SidebarItem = ({text, to}) => (
   <li className={s.sidebarItem}>
      <NavLink to={to} activeClassName="activeLink">{text}</NavLink>
   </li>
)

export default SidebarItem