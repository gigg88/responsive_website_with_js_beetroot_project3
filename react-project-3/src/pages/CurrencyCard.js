import '../scss/CurrencyCard.scss';

export default function CurrencyCard({ currencyName , exRate }) {
    return (
        
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{currencyName}</h5>
                <p className="card-text">Exchange Rate: {(exRate[currencyName]).toFixed(2)}</p>
               
              </div>
            </div>
          </div>
       
         );
  }



