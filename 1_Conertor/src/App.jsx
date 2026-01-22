import React from 'react'
import { useState } from 'react';
import "./App.css"
import { currencyConvertor } from './api/postapi';
const App = () => {
   const [loading, setLoading] = useState(false);
     const [amount, setAmount] = useState(0);
     const [fromCurrency,setFromCurrency] = useState("USD")
     const [toCurrency,setToCurrency] = useState("INR");
     const [convertedAmount,setConvertedAmount] = useState(null);
     const [error,setError] = useState(null);

 const handleConvertCurrency = async () => {
  setLoading(true);
  setError(null);

  try {
    const res = await currencyConvertor(fromCurrency, toCurrency, amount);

    // Example API response:
    // res.data.result = converted value
    setConvertedAmount(res.data.result);

  } catch (error) {
    setError("Error fetching conversion rate");
  }

  setLoading(false);
};

  return (
   <section className="currency-converter">
    <div className="currency-div">
      <h1>Currency Conertor</h1>
      <div>
        <label htmlFor="currency_amount" >Amount: 
          <input type="number" id="currency_amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <div className="currency-selector">
        <div>
          <label > From : 
            <select  value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="USD" >USD</option>
                <option value="EUR" >EUR</option>
                  <option value="INR" >INR</option>
                    <option value="GBP" >GBP</option>
                      <option value="AUD" >AUD</option>
            </select>
          </label>
        </div>

           <div>
          <label > To : 
            <select value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}>
              <option value="INR" >INR</option>
                <option value="USD" >USD</option>
                  <option value="EUR" >EUR</option>
                    <option value="GBP" >GBP</option>
                      <option value="AUD" >AUD</option>
            </select>
          </label>
        </div>
      </div>
      <button disabled={ loading || amount <=0 } onClick={handleConvertCurrency}>
        {loading? "Converting..":"Convert"}
      </button>
    </div>

    <hr/>
    {convertedAmount !== null && 
 (
      <div>
        <h2>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h2>
      </div>
    )}
    {error && <p>{error}</p>}
   </section>
  )
}

export default App