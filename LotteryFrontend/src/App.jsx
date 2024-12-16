
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [ticketNumber, setTicketNumber] = useState("");
  const [result, setResult] = useState("");

  const checkLottery = async () => {
    try {
      const response = await axios.post("http://localhost:3001/check-lottery", {
        ticketNumber,
      });
      console.log(response)
      setResult(response.data.message);
    } catch (error) {
      setResult("Error connecting to the server.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lottery Result Checker</h1>
      <input className='inputBox'
        type="text"
        placeholder="Enter your ticket number"
        value={ticketNumber}
        onChange={(e) => setTicketNumber(e.target.value)}
      />
      <br />
      <button className='btn' onClick={checkLottery}>Check Result</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
