import '../scss/CurrencyOption.scss';


export default function CurrencyOption ({currencyName}) {
    return (
    <option className="optionStyle"
     key={currencyName}
     value={currencyName}>
     {currencyName}
    
    </option>
);
}

