import s from './WhoToFollow.module.css'
import adaptive from '../SidebarsAdaptive.module.css'
import React from 'react'
import WhoToFollowItemContainer from './WhoToFollowItemContainer';

class WhoToFollow extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.setHoverClass()
   }

   render() {
      // console.log('Render: "WhoToFollow"')
      return (
         <section className={`${s.whoToFollow} ${adaptive.whoToFollow} who-to-follow`}>
            <h3 className={s.title}>{this.props.UI.groups}</h3>
            {this.props.state.map((item, i) => (
               <WhoToFollowItemContainer
                  key={i}
                  content={
                     {
                        check: item.check,
                        image: item.avatar,
                        community: item.community,
                        communityLogin: item.communityLogin,
                     }
                  }
                  UI={
                     {
                        ...this.props.UI,
                        followButtonText: item.status,
                     }
                  }
               />
            ))}
            <div className={s.showMore}>Show more</div>
         </section>
      )
   }
}

export default WhoToFollow