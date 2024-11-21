const APIKEY = 'fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0';
const apiUrl = `https://api.freecurrencyapi.com/v1/latest?base=USD&apikey=${APIKEY}`

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
        
    const currencyName = data.name;
    const currencyCode = data.code;

    console.log(this.currencyName);
    console.log(this.currencyCode); 
   
    
  })
  .catch(error => {
    console.error('Error fetching exchange rates:', error);
  });

  function App() {
    return (
      <div className="App">
        
        <Header/>
        <Home/>
        <CurrencyInfo/>
        <Footer/>
        
        
      </div>
    );
  }
  
  export default App;


  import React, { useState, useEffect } from 'react';


function App() {
  const [currencyData, setCurrencyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCurrencyData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {error ? (
        <p>Error fetching data: {error.message}</p>
      ) : currencyData ? (
        <CurrencyInfo name={currencyData.name} code={currencyData.code} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
  

{
  Object.keys(exRate).map(currencyName => {
      return (
          <p key={exRate[currencyName]}>{currencyName}:{exRate[currencyName]}</p>
      )
  })
}


<>
<p>Selected Currency: {selectedCurrency}</p>
<p>Exchange Rate: {selectedRate}</p>
<CurrencyCard currency={selectedCurrency} rate={selectedRate} />
</>

const selectedCurrency = Object.keys(exRate)[0]; // Assuming first currency by default
  const selectedRate = exRate[selectedCurrency].toFixed(2);



  const changeHandler = (val) => {
    getExchangeRates(val);
  };

  useEffect(() => {
    getExchangeRates();
  }, []);

  return (
    <>
      <select className="form-select" onChange={handleCurrencyChange}>
        {Object.keys(exRate).map((currencyName) => (
          <CurrencyOption
            key={currencyName}
            currencyName={currencyName}
            isSelected={currencyName === selectedCurrency} // Add isSelected prop
          />
        ))}
      </select>

      <p>
        {selectedCurrency}: {exRate[selectedCurrency]}
      </p>
    </>
  );
}    