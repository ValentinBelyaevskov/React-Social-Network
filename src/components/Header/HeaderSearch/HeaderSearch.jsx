import Input from "../../generic/Input"
import s from "./HeaderSearch.module.css"

const HeaderSearch = ({ image }) => (
   <div className={`${s.headerSearch} search`}>
      <form className={s.searchForm}>
         <div className={`${s.searchImage} search__image`}>
            <img src={image} alt="" />
         </div>
         <Input
            inputState={
               {
                  placeholder: "Search",
                  style: {
                     padding: "0 0.7rem",
                     fontSize: "var(--main-fz)",
                  }
               }
            } />
      </form>
   </div>
)

export default HeaderSearch