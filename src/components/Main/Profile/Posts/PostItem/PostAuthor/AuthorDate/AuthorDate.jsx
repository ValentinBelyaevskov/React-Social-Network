import s from "./AuthorDate.module.css";

const AuthorDate = ({ date }) => (
   <div className={s.authorDate}>
      {date}
   </div>
)

export default AuthorDate