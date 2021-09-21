import SidebarItem from "./SIdebarItem"

const SidebarList = () => (
   <ul className="sidebar__list">
      <SidebarItem text="Profile" />
      <SidebarItem text="Message" />
      <SidebarItem text="News" />
      <SidebarItem text="Music" />
      <SidebarItem text="Settings" />
   </ul>
)

export default SidebarList