import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


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