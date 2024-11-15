
import './App.css';
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInfo from './pages/CurrencyInfo.js';


const APIKEY = 'fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0';
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`;


function App() {
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    for (const [currencyCode, currencyData] of Object.entries(data.data)) {
      console.log(`Currency Code: ${currencyCode}`);
      console.log(`Currency Name: ${currencyData.name}`);
            
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
export default App;
