import React from 'react'
import s from './FriendsOnline.module.css'
import adaptive from '../SidebarsAdaptive.module.css';
import FriendsOnlineItem from './FriendsOnlineItem'

class FriendsOnline extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.setHoverClass()
   }

   render () {
      // console.log('Render: "FriendsOnline"')
      return (
         <div className={`${s.friendsOnline} ${adaptive.friendsOnline} friends-online`}>
            <h3 className={`${s.title} ${adaptive.friendsOnlineTitle}`}>Online</h3>
            
            {this.props.state.filter((item) => item.online).slice(0, 6).map((item, i) => (
               <FriendsOnlineItem key={i} image={item.avatar} name={item.name} location={item.location} />
            ))}
      
            {this.props.state.filter((item) => item.online).length <= 6 ? "" :
               (<div className={`${s.showMore} ${adaptive.showMore}`}>
                  Show more
               </div>)}
         </div>
      )
   }
}

export default FriendsOnline