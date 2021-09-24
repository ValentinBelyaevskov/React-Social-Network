import SidebarItem from "./SidebarItem/SidebarItem"
import s from "./Sidebar.module.css"
import appData from "../../data/appData/appData"

const Sidebar = () => (
   // Класс sidebar__wrapper имеет z-index, вынесен в общий файл App.css
   <div className={`${s.sidebar} sidebar`}>
      <aside className={`${s.sidebarWrapper} sidebar__wrapper`}>
         <ul>
            <SidebarItem to="/" text="Profile" />
            {appData.general.sidebarButtonsName.slice(1).map(
               (item, i) => (<SidebarItem key={i} text={item} to={`/${item}`}/>)
            )}
         </ul>
      </aside>
   </div>
)

export default Sidebar