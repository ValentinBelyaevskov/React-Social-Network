const UserInfoItem = ({property, value}) => (
   <div className="user__info-item">
      <div className="user__info-property">{property}:</div>
      <div className="user__info-value">{value}</div>
   </div>
)

export default UserInfoItem