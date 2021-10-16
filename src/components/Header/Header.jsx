import HeaderSearch from './HeaderSearch/HeaderSearch';
import s from "./Header.module.css";
import adaptive from "./HeaderAdaptive.module.css";

const Header = ({appState}) => {
   return (
      <header className={`${s.header} ${adaptive.header} header`}>
         <HeaderSearch image={appState.headerSearch.searchLogo} />
      </header>
   )
}

export default Header;