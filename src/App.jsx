import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import {useCurrencyChanger} from './hooks/useCurrencyChanger'

function App() {

  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("PKR")
  const [toCurrency, setToCurrency] = useState("USD")
  const [result, setResult] = useState(0)

  const {data, error} = useCurrencyChanger(fromCurrency, toCurrency)
  const SubmissionForm = () => {
    
    if (fromCurrency && toCurrency && data) {
      const newAmount = Number(amount)
      const currAmount = Number(data)
      setResult(newAmount*currAmount)

      
    }
  }
  return (
    <div className='w-full max-h-full bg-white text-black bg-[url(/trend.jpg)] h-220 bg-cover bg-center p-20'
    >
      <h1 className='text-center text-5xl mb-30'>Currency Changer</h1>
      <div>
        <InputBox label="From: " firstCurrency="PKR" secondCurrency="USD" isDisabled={false} setInputAmount={setAmount} amount={amount} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency}/>
        
      
      <div className='flex justify-center'>
        <button className=' bg-blue-600 text-white px-9 py-3 rounded-xl hover:bg-blue-400 cursor-pointer'
        onClick={SubmissionForm}
        >Convert</button>
      </div>

      <InputBox label="To: " firstCurrency="USD" secondCurrency="PKR" isDisabled={true} setInputAmount={setAmount} amount={String(result)} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency} />
      </div>
    </div>
  )
}

export default App
