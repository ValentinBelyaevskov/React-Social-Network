import SidebarMenu from "./SidebarMenu/SidebarMenu"
import s from "./SidebarGrid.module.css"

const SidebarGrid = () => (
   <aside className={s.sidebarGrid}>
      <SidebarMenu />
   </aside>
)

export default SidebarGrid