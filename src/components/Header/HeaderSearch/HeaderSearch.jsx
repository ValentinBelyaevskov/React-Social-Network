import SearchForm from "./SearchForm/SearchForm"
import s from "./HeaderSearch.module.css"

const HeaderSearch = ({image}) => (
   <div className={`${s.headerSearch} search`}>
      <SearchForm image={image}/>
   </div>
)

export default HeaderSearch