import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
   return (
      <div className="wrapper">
         <Header />
         <Sidebar />
         <Main />
         <Footer />
      </div>  // wrapper
   );
}


export default App;