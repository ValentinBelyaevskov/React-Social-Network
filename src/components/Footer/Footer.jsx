import FooterRoots from "./FooterRoots";
import FooterText from "./FooterText";
import s from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={`${s.footer} footer`}>
         <FooterRoots/>
         <FooterText text="Lorem ipsum dolor set ..."/>
      </footer>
   )
}

export default Footer;