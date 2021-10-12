import Profile from './Profile/Profile';
import s from "./Main.module.css";
import adaptive from './MainAdaptive.module.css'
import Messages from './Messages/Messages';
import { Route, Switch } from 'react-router-dom';
import ErrorNotFound from './Error/ErrorNotFound';

const Main = ({state, appState, dispatch}) => (
   <main className={`${s.main} ${adaptive.main} main`}>
      <Switch>
         <Route exact path="/Messages">
            <Messages state={{messages: state.messages, friends: state.friends}} appState={appState.messages}/>
         </Route>
         <Route exact path="/">
            <Profile state={state.profile} dispatch={dispatch} appState={appState.profile}/>
         </Route>
         <Route>
            <ErrorNotFound />
         </Route>
      </Switch>
   </main>
)

export default Main