import ActualContainer from './ActualContainer'
import s from './WhatToFollow.module.css'
import WhoToFollowContainer from './WhoToFollowContainer'

const WhatToFollow = () => (
   <div className={`${s.whatToFollow} what-to-follow`}>
      <ActualContainer/>
      <WhoToFollowContainer/>
   </div>
)

export default WhatToFollow