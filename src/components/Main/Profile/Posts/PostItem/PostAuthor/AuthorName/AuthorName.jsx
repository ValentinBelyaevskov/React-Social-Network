import s from "./AuthorName.module.css";

const AuthorName = ({ name }) => (
   <div className={s.authorName}>
      {name}
   </div>
)

export default AuthorName