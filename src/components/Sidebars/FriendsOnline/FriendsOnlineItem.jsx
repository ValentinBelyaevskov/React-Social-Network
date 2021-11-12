import s from './FriendsOnlineItem.module.css'
import adaptive from '../SidebarsAdaptive.module.css'

const FriendsOnlineItem = ({ image, name, location }) => {
   // console.log('Render: "FriendsOnlineItem"')

   return (
      <div className={`${s.gridContainer} ${adaptive.gridContainer} friends-online__item`}>
         <div className={`${s.avatar} friends-online__person-avatar`}>
            <img src={image} alt="person avatar" />
         </div>
         <div className={s.name}>
            {name}
         </div>
         <div className={s.location}>
            {location ? location : "Write a message"}
         </div>
      </div>
   )
}

export default FriendsOnlineItem