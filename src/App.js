import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
   return (
      <div className="wrapper">
         <Header />
         <Router>
            <Main />
            <Sidebar />
         </Router>
         <Footer />
      </div>  // wrapper
   );
}

export default App;