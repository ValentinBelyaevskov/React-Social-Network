import Profile from './Profile/Profile';
import s from "./Main.module.css";
import adaptive from './MainAdaptive.module.css'
import Messages from './Messages/Messages';
import { Route, Switch, Redirect } from 'react-router-dom';
import ErrorNotFound from './Error/ErrorNotFound';
import Friends from './Friends/Friends';
import ChatContainer from './MessagesChat/ChatContainer';

const Main = ({ dialogs }) => (
   <main className={`${s.main} ${adaptive.main} main`}>
      <Switch>
         <Route exact path="/Profile">
            {/* // ! */}
            <Profile />
         </Route>
         <Route exact path="/Messages">
            <Messages />
         </Route>
         <Route exact path="/Friends">
            <Friends />
         </Route>

         {dialogs.slice(0).reverse().map((item, index) => (
            <Route path={`/Messages/${item.dialogId}`}>
               <ChatContainer key={index} number={index} dialogId={item.dialogId}/>
            </Route>
         )
         )}

         <Route exact path="/">
            <Redirect to="/Profile" />
         </Route>

         <Route>
            <ErrorNotFound />
         </Route>
      </Switch>
   </main>
)

export default Main