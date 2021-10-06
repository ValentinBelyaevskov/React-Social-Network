import React from 'react'
import callSetClassForHoverEv from '../../../lib/callSetClassForHoverEv';
import s from './FriendsOnline.module.css'
import adaptive from '../SidebarsAdaptive.module.css';
import FriendsOnlineItem from './FriendsOnlineItem'

class FriendsOnline extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      callSetClassForHoverEv("Messages", "friends-online__person-avatar--active", "friends-online__person-avatar", "friends-online__item")
   }

   render () {
      return (
         <div className={`${s.friendsOnline} ${adaptive.friendsOnline} friends-online`}>
            <h3 className={s.title}>Online</h3>
      
            {this.props.state.filter((item) => item.online).slice(0, 6).map((item, i) => (
               <FriendsOnlineItem key={i} image={item.avatar} name={item.name} location={item.location} />
            ))}
      
            {this.props.state.filter((item) => item.online).length <= 6 ? "" :
               (<div className={s.showMore}>
                  Show more
               </div>)}
         </div>
      )
   }
}

export default FriendsOnline