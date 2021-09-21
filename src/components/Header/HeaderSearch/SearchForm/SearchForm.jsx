import SearchImage from "./SearchImage/SearchImage"
import SearchInput from "./SearchInput/SearchInput"
import s from "./SearchForm.module.css"

const SearchForm = ({ image }) => (
   <form className={s.searchForm}>
      <SearchInput />
      <SearchImage image={image} />
   </form>
)

export default SearchForm