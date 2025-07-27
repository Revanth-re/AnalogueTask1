
import React, { useState } from 'react';
import Chart from "./Chart.jsx";

const App = () => {
  const [inputData, setInputData] = useState({
    type1: 10000, 
    type2: 12,     
    type3: 10,    
  });
console.log(inputData);
console.log(inputData.type1,inputData.type2);


  return (
    <div style={{ display:"flex", padding: '30px', fontFamily: 'sans-serif', justifyContent:"center" ,alignItems:"center"

    }}>

      <form>
        <label>Monthly Investment (₹): {inputData.type1.toLocaleString()}</label><br />
        <input
          type="range"
          min={1000}
          max={100000}
          value={inputData.type1}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type1: Number(e.target.value) }))
          }
        />
        <br /><br />

        <label>Return Percentage (%): {inputData.type2}%</label><br />
        <input
          type="range"
          min={1}
          max={100}
          value={inputData.type2}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type2: Number(e.target.value) }))
          }
        />
        <br /><br />

        <label>Time Period (Years): {inputData.type3}</label><br />
        <input
          type="range"
          min={1}
          max={40}
          value={inputData.type3}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type3: Number(e.target.value) }))
          }
        />
      </form>         
      <Chart RealData={inputData} />

        <div style={{ marginLeft: '40px' }}>
          <h3>Investment: ₹{inputData.type1.toLocaleString()}</h3>
          <h3>Return: {inputData.type2}%</h3>
          <h3>Time: {inputData.type3} years</h3>
        </div>

      <div style={{ display: 'flex', marginTop: '40px', alignItems: 'center' }}>
        {/* <Chart RealData={inputData} /> */}
{/* 
        <div style={{ marginLeft: '40px' }}>
          <h3>Investment: ₹{inputData.type1.toLocaleString()}</h3>
          <h3>Return: {inputData.type2}%</h3>
          <h3>Time: {inputData.type3} years</h3>
        </div> */}
      </div>
    </div>
  );
};

export default App;
