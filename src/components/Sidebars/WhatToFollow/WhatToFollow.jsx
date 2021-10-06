import Actual from './Actual'
import s from './WhatToFollow.module.css'
import WhoToFollow from './WhoToFollow'

const WhatToFollow = ({state, appState}) => (
   <div className={`${s.whatToFollow} what-to-follow`}>
      <Actual state={state.actual} appState={appState}/>
      <WhoToFollow state={state.whoToFollow} appState={appState}/>
   </div>
)

export default WhatToFollow