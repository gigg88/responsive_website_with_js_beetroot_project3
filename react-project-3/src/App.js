
import './App.css';
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInfo from './pages/CurrencyInfo.js';


const APIKEY = 'fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0';
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`;


function App() {
  return (
    <div className="App">
      
      <CurrencyInfo/>
      
      
      
    </div>
  );
}

export default App;
