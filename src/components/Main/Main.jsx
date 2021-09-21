import Profile from './Profile/Profile';
import s from "./Main.module.css";

const Main = () => (
   <main className={`${s.main} main`}>
      <Profile />
   </main>
)

export default Main