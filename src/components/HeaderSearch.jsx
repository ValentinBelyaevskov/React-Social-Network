import SearchForm from "./SearchForm"

const HeaderSearch = ({image}) => (
   <div className="header__search search">
      <SearchForm image={image}/>
   </div>
)

export default HeaderSearch