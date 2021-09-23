import SidebarGrid from "./SIdebarGrid/SidebarGrid"
import s from "./SidebarWrapper.module.css"

const SidebarWrapper = () => (<div className={`${s.sidebarWrapper} sidebar__wrapper`}>
   <SidebarGrid />
</div>)

export default SidebarWrapper