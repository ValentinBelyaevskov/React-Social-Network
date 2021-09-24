import UserInfoItem from "./UserInfoItem"
import appData from "../../../../../data/appData/appData"

const UserInfo = ({data}) => {
   return (
      <div className="user__info">
         {appData.profilePage.userPropertyName.map(
            (property, i) => (
               <UserInfoItem key={i} property={property} value={data[property]}/>
            )
         )}
      </div>
   )
}


export default UserInfo