import s from "./FooterText.module.css";

const FooterText = ({text}) => (
   <div className={s.footerText}>{text}</div>
)

export default FooterText