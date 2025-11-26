import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"

import { useState } from "react"


import axios from 'axios'
import Input from "@mui/material/Input"
import '../App.css'

function BestWindow() {
    const [period,setPeriod]=useState("")
    
    const [result, setResult] = useState<{
        from: string;
        to: string;
        avgCleanEnergyPercentage: string;
        } | null>(null);
    const handleSubmit=()=>{
      
        axios.get(`https://generation-mix-backend.onrender.com/api/optimalWindow/${period}`)
      .then(res => setResult(res.data))
      .catch(err => console.error(err));

    }
   

    return (

        <div>
        <h1>Znajdź najbardziej optymalne okno ładowania</h1>
        <FormControl className='form=control'>
        <InputLabel  sx={{
      color: "black",
      "&.Mui-focused": { color: "black" }, 
      fontWeight: 500,
    }} className="period-input">Ilość godzin (1-6)</InputLabel>
        <Input  
        id="period-input" 
        value={period} 
        onChange={(e)=>setPeriod(e.target.value)} 
        className="input-field"
         />
        <button className="submit-button"  onClick={handleSubmit}>Sprawdź</button>
        </FormControl>
        {result && (
        
        <div style={{ marginTop: "20px" }}>
          <h2 className="best-window-start">Czas rozpoczęcia: {result.from}</h2>
          <h2 className="best-window-end">Czas zakończenia: {result.to}</h2>
          <h2 className="best-window-clean">Średni udział czystej energii: {result.avgCleanEnergyPercentage}%</h2>
        </div>
      )}
    </div>



    )
}

export default BestWindow

