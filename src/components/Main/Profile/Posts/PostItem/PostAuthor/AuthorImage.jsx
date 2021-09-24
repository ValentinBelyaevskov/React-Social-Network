import s from "./AuthorImage.module.css";

const AuthorImage = ({image}) => (
   <div className={`${s.authorImage} author__image`}>
      <img src={image} alt="" />
   </div>
)

export default AuthorImage