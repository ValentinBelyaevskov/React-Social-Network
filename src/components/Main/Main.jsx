import Profile from './Profile/Profile';
import s from "./Main.module.css";
import Message from './Message/Message';
import data from '../../data/profile/data';
import messages from '../../data/messages/messages';

const Main = () => (
   <main className={`${s.main} main`}>
      {/* <Profile data={data}/> */}
      <Message messages={messages}/>
   </main>
)

export default Main