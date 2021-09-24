import s from "./PostDate.module.css";

const postDate = ({ date }) => (
   <div className={s.postDate}>
      {date}
   </div>
)

export default postDate