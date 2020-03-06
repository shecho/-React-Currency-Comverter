import React, {useEffect,useState} from 'react';
import './App.css';
import  CurrencyRow from './components/CurrencyRow.component'
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
    const [currencyOptions, setCurrencyOptions] = useState ([])
    useEffect(()=>{
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data =>{
                // console.log(data )
                setCurrencyOptions([data.base, ...Object.keys(data.rates )])

            })
            
    },[])
  return (
    <div className="App">
      <> 
        <h1>Convert</h1>
        <CurrencyRow
            currencyOptions={currencyOptions}
        />
      
        <div className="equals"> = </div>
        <CurrencyRow
            currencyOptions={currencyOptions}
        />

      </>


    </div>
  );
}
 
export default App;
