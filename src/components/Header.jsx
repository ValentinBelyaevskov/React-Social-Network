import React from 'react';

const Header = () => {
   return (
      <header className="header">
            <div className="header__logo">
               <img src="school_students_icon_144607.svg" alt="" />
            </div>
            <div className="header__search search">

               <form className="search__form">

                  <input className="search__input" type="text" placeholder="Anything new?" />

                  <div className="search__image">
                     <img src="https://img.icons8.com/cotton/64/000000/search--v1.png" />
                  </div>

               </form>

            </div>
      </header>
   )
}

export default Header;