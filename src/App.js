import './vars.css'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebars from './components/Sidebars/Sidebars';

const App = () => {
   return (
      <div className="wrapper">
         <Header />
         <Main />
         <Sidebars />
      </div>
   );
}

export default App;