import { useState } from "react";

function InputBox({
    label,
    firstCurrency,
    secondCurrency,
    isDisabled,
    setInputAmount,
    amount="0",
    setFromCurrency,
    setToCurrency
}){
    const currencies = [firstCurrency, secondCurrency,"EUR", "INR", "GBP", "AUD", "CAD", "CNY", "CHF", "HKD", "NZD", "JPY", "SAR", "AED"]

    const inputAmount=(e)=>{
        if (!setInputAmount) return
        setInputAmount(e.target.value)
    }
    const formSubmission = (e)=> (e.preventDefault())

    const setValue = (e) => {
        if(label === "From: ") setFromCurrency(e.target.value)
        else if (label === "To: ") setToCurrency(e.target.value)
    }
    
    return (
        <div className="text-black m-4 p-3 flex justify-center ">
            <div className="border-4 max-w-200 max-h-full bg-white p-10  ">
                <form onSubmit={formSubmission}>
                <label htmlFor="amount">Amount: </label>
                <input id="amount" 
                type="number"
                 
                placeholder="Enter Amount here"
                disabled={isDisabled}
                onChange={inputAmount}
                
                className="bg-white text-black border-2 p-1 m-1"
                value={amount}
                />
                <label htmlFor="currency">{label} </label>
                <select name="currency" 
                id="currency" 
                onChange={setValue}
                
                className="m-1 border-2 p-1">
                    {currencies.map((curr)=> <option key={curr}>{curr}</option>)}  
                </select>
                </form>
            </div>
            
        </div>
    );
}
export default InputBox