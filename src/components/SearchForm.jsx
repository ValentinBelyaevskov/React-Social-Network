import SearchImage from "./SearchImage"
import SearchInput from "./SearchInput"

const SearchForm = ({ image }) => (
   <form className="search__form">
      <SearchInput />
      <SearchImage image={image} />
   </form>
)

export default SearchForm