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
    
      <div className="result">
         <div className="countryInfo">Đất nước: {res.c} <img style={{height: 32}} alt="" src={`https://www.countryflags.io/${res.countryCode}/flat/64.png`}></img></div>
         <p>Thời gian cập nhật gần nhất: {res.time}</p>
        <p>Tổng số ca nhiễm: {res.total}</p>  
         <p>Tổng số ca tử vong: {res.deaths}</p>
         <p>Tổng số ca đã chữa khỏi: {res.recovers}</p>
      </div>
    </div>
  )
}

export default App;
