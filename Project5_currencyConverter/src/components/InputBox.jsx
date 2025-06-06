import React, { useId, useRef } from "react";
import useCurrencyFullName from "../hooks/useCurrencyFullName";


export function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const inputId = useId(); // for optimization 
  const currencyName = useCurrencyFullName()
  const useReference =  useRef()

  const previousValue=()=>{
    useReference.current?.select()
  }

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        ref={useReference}
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
          onAmountChange && Number(onAmountChange(e.target.value))
          }
          disabled={amountDisable}
          onClick={previousValue}
          
        />
      </div>
      <div className="flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="w-43 max-w-full rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
                {currencyName[currency]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
