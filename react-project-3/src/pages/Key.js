
//https://app.freecurrencyapi.com/dashboard

const APIKEY = 'fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0';

fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${APIKEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
        
    const currencyName = data.name;
    const currencyCode = data.code;
    
  })
  .catch(error => {
    console.error('Error fetching exchange rates:', error);
  });

  
            

  