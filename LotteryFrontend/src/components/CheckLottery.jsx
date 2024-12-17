import React, {useState} from 'react';
import axios from 'axios';


const CheckLottery = () => {
    const [ticketNumber, setTicketNumber] = useState("");
    const [result, setResult] = useState("");
  
    const checkLottery = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/check-lottery", {
          ticketNumber,
        });
        setResult(response.data.message); // Display response message
      } catch (error) {
        setResult("Error connecting to the server.");
      }
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Lottery Result Checker</h1>
        <input className='inBox'
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

export default CheckLottery;
