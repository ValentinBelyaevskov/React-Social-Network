import UserInfoItem from "./UserInfoItem"

const UserInfo = ({state, UI}) => {
   return (
      <div className="user__info">
         {UI.map(
            (property, i) => (
               <UserInfoItem key={i} property={property} value={state[property]}/>
            )
         )}
      </div>
   )
}


export default UserInfo