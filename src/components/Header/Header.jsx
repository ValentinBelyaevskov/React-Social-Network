import HeaderSearch from './HeaderSearch/HeaderSearch';
import s from "./Header.module.css";
import adaptive from "./HeaderAdaptive.module.css";

const Header = ({appState}) => {
   // const headerData = appData.header;

   return (
      <header className={`${s.header} ${adaptive.header} header`}>
         <HeaderSearch image={appState.headerSearch.searchLogo} />
      </header>
   )
}

export default Header;