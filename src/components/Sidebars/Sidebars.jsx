import { Route, Switch, } from 'react-router'
import Controls from './Controls/Controls'
import FriendsOnline from './FriendsOnline/FriendsOnline'
import s from './Sidebars.module.css'
import adaptive from './SidebarsAdaptive.module.css'
import WhatToFollow from './WhatToFollow/WhatToFollow'

const Sidebars = ({state, appState}) => (
   <div className={`${s.sidebars} ${adaptive.sidebars} sidebars`}>
      <Controls appState={appState.controls}/>
      <Switch>
         <Route exact path="/Messages">
            <FriendsOnline state={state.friends}/>
         </Route>
         <Route exact path="/">
            <WhatToFollow state={state.whatToFollow} appState={appState.whatToFollow}/>
         </Route>
      </Switch>
   </div>
)

export default Sidebars