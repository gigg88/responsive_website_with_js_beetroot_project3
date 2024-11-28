import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-50">
        <label htmlFor={id} className="form-label text-black mb-2 font-weight-bolder">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="form-control outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-50 mt-5 d-flex justify-content-end">
        <p className="text-black mb-2 w-100">Currency Type</p>
        <select
          className="form-select rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;