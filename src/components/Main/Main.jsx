import Profile from './Profile/Profile';
import s from "./Main.module.css";
import Messages from './Messages/Message';
import messages from '../../data/userData/messages';
import { Route, Switch } from 'react-router-dom';
import ErrorNotFound from './Error/ErrorNotFound';

const Main = () => (
   <main className={`${s.main} main`}>
      <Switch>
         <Route path="/messages">
            <Messages messages={messages} />
         </Route>
         <Route path="/">
            <Profile />
         </Route>
         <Route>
            <ErrorNotFound/>
         </Route>
      </Switch>
   </main>
)

export default Main