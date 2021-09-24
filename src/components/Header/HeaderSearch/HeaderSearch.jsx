import s from "./HeaderSearch.module.css"
import SearchImage from "./SearchImage"
import SearchInput from "./SearchInput"

const HeaderSearch = ({ image }) => (
   <div className={`${s.headerSearch} search`}>
      <form className={s.searchForm}>
         <SearchInput/>
         <SearchImage image={image}/>
      </form>
   </div>
)

export default HeaderSearch