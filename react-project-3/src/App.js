
import './App.css';
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInfo from './pages/CurrencyInfo';
import CurrencyOption from './pages/CurrencyOption';


function App() {
  return (
    <div className="App">
      <>
      <CurrencyOption/>
      <CurrencyInfo/>
       
      </>
      
      
    </div>
  );
}

export default App;
