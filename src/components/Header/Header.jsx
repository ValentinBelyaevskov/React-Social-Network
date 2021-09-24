import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import s from "./Header.module.css";
import appData from '../../data/appData/appData';


const Header = () => {
   const headerData = appData.general.header;

   return (
      <header className={`${s.header} header`}>
         <HeaderLogo image={headerData.logo} />
         <HeaderSearch image={headerData.searchLogo} />
      </header>
   )
}

export default Header;