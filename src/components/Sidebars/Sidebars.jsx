import { Route, Switch, } from 'react-router'
import ControlsContainer from './Controls/ControlsContainer'
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer'
import s from './Sidebars.module.css'
import adaptive from './SidebarsAdaptive.module.css'
import WhatToFollow from './WhatToFollow/WhatToFollow'

const Sidebars = () => (
   <div className={`${s.sidebars} ${adaptive.sidebars} sidebars`}>
      <ControlsContainer/>
      <Switch>
         <Route path="/Messages">
            <FriendsOnlineContainer/>
         </Route>
         <Route exact path="/Profile">
            <WhatToFollow/>
         </Route>
      </Switch>
   </div>
)

export default Sidebars