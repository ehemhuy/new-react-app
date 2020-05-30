import React, { useState } from 'react';
import './App.css';
import './bootstrap.min.css';
import {getCoronaAPI} from './api'
function App() {
  const [country, setCountry] = useState('')
  const [res, setRes] = useState({})
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await getCoronaAPI(country)
      setRes(data)
      setCountry('')
    }
  }
  return (
   
    <div className="main">
      <h2>Corona</h2>
      <input className="input form-control"
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        onKeyPress={search}
      ></input>
    
      {(
        <>
        <div className="result">
          <p>Đất nước: {res.c}</p>
          <p>Thời gian cập nhật gần nhất: {res.time}</p>
          <p>Tổng số ca nhiễm: {res.total}</p>  
        </div>
        </>    
      )}
    </div>
  )
}

export default App;
