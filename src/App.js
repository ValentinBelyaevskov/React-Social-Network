import './vars.css'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebars from './components/Sidebars/Sidebars';
import SidebarsAdaptive from './components/Sidebars/SidebarsAdaptive.module.css';
import MainContainer from './components/Main/MainContainer';

const App = () => {
   return (
      <div className={`${SidebarsAdaptive.wrapper} wrapper`}>
         <Header/>
         <MainContainer/>
         <Sidebars />
      </div>
   );
}

export default App;