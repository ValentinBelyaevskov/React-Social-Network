import s from "./HeaderSearch.module.css"

const HeaderSearch = ({ image }) => (
   <div className={`${s.headerSearch} search`}>
      <form className={s.searchForm}>
         <div className={`${s.searchImage} search__image`}>
            <img src={image} alt=""/>
         </div>
         <input className="search__input" type="text" placeholder="Search" />
      </form>
   </div>
)

export default HeaderSearch