
export default function CurrencyOption ({currencyName}) {
    return <option key={currencyName} value={currencyName}>
    {currencyName}
</option>
}

