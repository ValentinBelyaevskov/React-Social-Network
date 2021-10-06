import s from './WhoToFollow.module.css'
import WhoToFollowItem from './WhoToFollowItem'
import adaptive from '../SidebarsAdaptive.module.css'
import callSetClassForHoverEv from '../../../lib/callSetClassForHoverEv'
import React from 'react'

class WhoToFollow extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      callSetClassForHoverEv("Profile", "who-to-follow-item__avatar--active", "who-to-follow__avatar", "who-to-follow__item")
   }

   render() {
      return (
         <section className={`${s.whoToFollow} ${adaptive.whoToFollow} who-to-follow`}>
            <h3 className={s.title}>{this.props.appState.groups}</h3>
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
                  appState={this.props.appState}
               />
            ))}
            <div className={s.showMore}>Show more</div>
         </section>
      )
   }
}

export default WhoToFollow