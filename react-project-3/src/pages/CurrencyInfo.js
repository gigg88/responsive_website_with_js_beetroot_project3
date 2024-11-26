import { useEffect, useState } from 'react';
import CurrencyCard from "./CurrencyCard";
import CurrencyOption from "./CurrencyOption";
import '../scss/CurrencyCard.scss';
import './API';

const APIKEY = "fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0";
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`;

export default function CurrencyInfo() {
  const [exRate, setExRate] = useState([]);

  const getExchangeRates = (currency = "USD") => {
    fetch(apiUrl + `&base_currency=${currency}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setExRate(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  const changeHandler = (val) => {
    getExchangeRates(val);
  };

  useEffect(() => {
    getExchangeRates();
  }, []);

  return (
    <>
      <select onChange={(event) => changeHandler(event.target.value)}>
        {Object.keys(exRate).map((currencyName) => (
          <CurrencyOption 
            key={currencyName} 
            currencyName={currencyName} />
        ))}
      </select>

    <div className='grid'>
      {Object.keys(exRate).map((currencyName) => {
        return (
          <div className="card-group">
            <CurrencyCard
            key={currencyName}
            currencyName={currencyName}
            exRate={exRate}
            />
           </div>
          
        );
      })}
      </div>
    </>
  );
}
