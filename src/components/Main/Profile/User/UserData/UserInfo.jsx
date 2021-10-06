import UserInfoItem from "./UserInfoItem"

const UserInfo = ({state, appState}) => {
   return (
      <div className="user__info">
         {appState.map(
            (property, i) => (
               <UserInfoItem key={i} property={property} value={state[property]}/>
            )
         )}
      </div>
   )
}


export default UserInfo