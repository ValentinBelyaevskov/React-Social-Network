import s from "./AuthorDate.module.css";

const AuthorDate = ({ date }) => (
   <div className={`${s.authorDate} author__date`}>
      {date}
   </div>
)

export default AuthorDate