import s from "./AuthorName.module.css";

const AuthorName = ({ name }) => (
   <div className={`${s.authorName} author__name`}>
      {name}
   </div>
)

export default AuthorName