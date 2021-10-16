import Profile from './Profile/Profile';
import s from "./Main.module.css";
import adaptive from './MainAdaptive.module.css'
import Messages from './Messages/Messages';
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorNotFound from './Error/ErrorNotFound';
import Chat from './MessagesChat/Chat';

const Main = ({state, appState, dispatch}) => (
   <main className={`${s.main} ${adaptive.main} main`}>
      <Switch>
         <Route exact path="/Messages">
            <Messages dispatch={dispatch} state={state} appState={appState.messages}/>
         </Route>
         <Route exact path="/Profile">
            <Profile state={state.profile} dispatch={dispatch} appState={appState.profile}/>
         </Route>
         <Route path="/Messages/0">
            <Chat dispatch={dispatch} state={state} appState={appState.chat}/>
         </Route>
         <Route exact path="/">
            <Redirect to="/Profile"/>
         </Route>
         <Route>
            <ErrorNotFound />
         </Route>
      </Switch>
   </main>
)

export default Main