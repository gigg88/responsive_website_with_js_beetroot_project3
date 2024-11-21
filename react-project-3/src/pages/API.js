
import { useEffect, useState } from "react";

const APIKEY = "fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0";
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`;

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`apiUrl`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;