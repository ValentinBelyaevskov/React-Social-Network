import s from "./SearchImage.module.css"

const SearchImage = ({image}) => (
   <div className={`${s.searchImage} search__image`}>
      <img src={image} />
   </div>
)

export default SearchImage