import { useEffect, useState } from "react";

import './API';
import useCurrencyInfo from "./API";


function Converter(){
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  
}


               
          



