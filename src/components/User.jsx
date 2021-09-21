import UserAvatar from "./UserAvatar"
import UserData from "./UserData"

const User = () => (
   <div className="user">
      <UserAvatar image="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" />
      <UserData />
   </div>
)

export default User