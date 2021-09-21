import FooterRoots from "./FooterRoots/FooterRoots";
import FooterText from "./FooterText/FooterText";
import s from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={s.footer}>
         <FooterRoots/>
         <FooterText text="Lorem ipsum dolor set ..."/>
      </footer>
   )
}

export default Footer;