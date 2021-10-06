import './vars.css'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebars from './components/Sidebars/Sidebars';
import setSidebarPosition from './lib/setSidebarPosition';

function App({state, appState}) {
   return (
      <div className="wrapper">
         <Header appState={appState.header} />
         <Main state={state} appState={appState.main} />
         <Sidebars state={state} appState={appState.sidebars}/>
      </div>
   );
}

setSidebarPosition("sticky");

export default App;