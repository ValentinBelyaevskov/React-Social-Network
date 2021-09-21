import s from "./HeaderLogo.module.css"

const HeaderLogo = ({image}) => (
   <div className={`${s.headerLogo} header__logo`}>
      <img src={image} alt="" />
   </div>
)

export default HeaderLogo