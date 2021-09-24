import s from "./UserName.module.css"

const UserName = ({name}) => (
   <h2 className={s.userName}>{name}</h2>
)

export default UserName