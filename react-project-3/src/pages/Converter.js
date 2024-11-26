import { useEffect, useState } from 'react';
import InputBox from "./InputBox";

import './API';
import useCurrencyInfo from "./API";

const APIKEY = "fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0";
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`;


export default function Converter() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [options, setOptions] = useState([]);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to.toUpperCase()])
  }

  const getPageloadData = (currency = from) => {
    fetch(apiUrl + `&base_currency=${currency}`)
    .then((res) => res.json())
    .then((res) => {
     
      setCurrencyInfo(res.data);
      
      setOptions(Object.keys(res.data))
    })
  }

  useEffect(() => getPageloadData(), [])

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center vh-100 bg-cover bg-no-repeat">
      <div className="card border border-secondary rounded-lg p-5 bg-white shadow-sm w-100">
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className="mb-3">
            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setFrom(currency);
                console.log(currency);
                
                getPageloadData(currency);
              }}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>
          <div className="position-relative w-100 mb-3">
            <button
              className="btn btn-primary position-absolute top-50 left-50 translate-middle border-0 rounded-pill">
              Swap
            </button>
          </div>
          <div className="mb-3">
            <InputBox
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>

  )

};







