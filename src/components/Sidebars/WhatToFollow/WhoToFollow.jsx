import s from './WhoToFollow.module.css'
import WhoToFollowItem from './WhoToFollowItem'
import adaptive from '../SidebarsAdaptive.module.css'
import React from 'react'

class WhoToFollow extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.setHoverClass()
   }

   render() {
      return (
         <section className={`${s.whoToFollow} ${adaptive.whoToFollow} who-to-follow`}>
            <h3 className={s.title}>{this.props.UI.groups}</h3>
            {this.props.state.map((item, i) => (
               <WhoToFollowItem
                  key={i}
                  content={
                     {
                        check: item.check,
                        image: item.avatar,
                        community: item.community,
                        communityLogin: item.communityLogin,
                     }
                  }
                  UI={this.props.UI}
               />
            ))}
            <div className={s.showMore}>Show more</div>
         </section>
      )
   }
}

export default WhoToFollow