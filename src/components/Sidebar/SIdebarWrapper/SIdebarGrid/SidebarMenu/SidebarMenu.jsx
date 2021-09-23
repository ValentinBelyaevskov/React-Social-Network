import SidebarList from "./SidebarList/SidebarList"
import s from './SidebarMenu.module.css'

const SidebarMenu = () => (
   <div className={s.sidebarMenu}>
      <SidebarList />
   </div>
)

export default SidebarMenu