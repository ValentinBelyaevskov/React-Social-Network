import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';


function App() {
   return (
      <div className="wrapper">

         <Header />
         <Sidebar />

         <main className="main">
            <Profile />
         </main>

         <Footer />

      </div>  // wrapper
   );
}


export default App;