import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import s from "./Header.module.css"
console.log(s)

const Header = () => {
   return (
      <header className={`${s.header} header`}>
         <HeaderLogo image="school_students_icon_144607.svg"/>
         <HeaderSearch image="https://img.icons8.com/cotton/64/000000/search--v1.png"/>
      </header>
   )
}

export default Header;