import logo from './logo.svg';
import './App.css';
import './scss/main.scss'
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Key from './pages/Key.js';



function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
