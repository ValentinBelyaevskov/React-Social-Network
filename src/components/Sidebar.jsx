import React from "react";

const Sidebar = () => {
   return (
      <div className="sidebar">
      <div className="sidebar__wrapper">
         <aside className="sidebar__grid">
            <div className="sidebar__menu">
               <ul className="sidebar__list">
                  <li className="sidebar__item">
                     <a className="sidebar__link">Profile</a>
                  </li>
                  <li className="sidebar__item">
                     <a className="sidebar__link">Messages</a>
                  </li>
                  <li className="sidebar__item">
                     <a className="sidebar__link">News</a>
                  </li>
                  <li className="sidebar__item">
                     <a className="sidebar__link">Music</a>
                  </li>
                  <li className="sidebar__item">
                     <a className="sidebar__link">Settings</a>
                  </li>
               </ul>
            </div>
         </aside>
      </div>
   </div>
   )
}

export default Sidebar;