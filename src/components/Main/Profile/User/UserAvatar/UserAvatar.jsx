import s from "./UserAvatar.module.css"

const UserAvatar = ({image}) => (
   <div className={`${s.userAvatarWrapper} user__avatar-wrapper`}>
      <div className={`${s.userAvatar} user__avatar`}>
         <img src={image} alt="" />
      </div>
   </div>
)

export default UserAvatar