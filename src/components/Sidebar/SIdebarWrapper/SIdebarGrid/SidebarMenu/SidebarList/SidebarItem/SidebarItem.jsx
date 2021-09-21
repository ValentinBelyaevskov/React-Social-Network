import s from "./SidebarItem.module.css"

const SidebarItem = ({text}) => (
   <li className={s.sidebarItem}>
      <a className="sidebar__link">{text}</a>
   </li>
)

export default SidebarItem