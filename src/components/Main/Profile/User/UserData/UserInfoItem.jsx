import s from "./UserInfoItem.module.css"

const UserInfoItem = ({property, value}) => (
   <div className={s.userInfoItem}>
      <div className={s.userInfoProperty}>{property}:</div>
      <div className={s.userInfoValue}>{value}</div>
   </div>
)

export default UserInfoItem