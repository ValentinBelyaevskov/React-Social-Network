import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

const Header = () => {
   return (
      <header className="header">
         <HeaderLogo image="school_students_icon_144607.svg"/>
         <HeaderSearch image="https://img.icons8.com/cotton/64/000000/search--v1.png"/>
      </header>
   )
}

export default Header;