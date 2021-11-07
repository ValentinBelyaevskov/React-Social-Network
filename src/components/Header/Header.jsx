import s from "./Header.module.css";
import adaptive from "./HeaderAdaptive.module.css";
import HeaderSearchContainer from './HeaderSearch/HeaderSearchContainer';

const Header = () => {
   return (
      <header className={`${s.header} ${adaptive.header} header`}>
         <HeaderSearchContainer/>
      </header>
   )
}

export default Header;