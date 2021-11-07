import Profile from './Profile/Profile';
import s from "./Main.module.css";
import adaptive from './MainAdaptive.module.css'
import Messages from './Messages/Messages';
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorNotFound from './Error/ErrorNotFound';
import Chat from './MessagesChat/Chat';

const Main = () => (
   <main className={`${s.main} ${adaptive.main} main`}>
      <Switch>
         <Route exact path="/Profile">
         {/* // ! */}
            <Profile/>
         </Route>
         <Route exact path="/Messages">
            <Messages/>
         </Route>
         <Route path="/Messages/0">
            <Chat/>
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