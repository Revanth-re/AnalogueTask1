

import React, { useState } from 'react';
import Chart from "./Chart.jsx";

const App = () => {
  const [inputData, setInputData] = useState({
    type1: 0, 
    type2: 0, 
    type3: 0, 
  });

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <form>
        <label>Monthly Investment (₹)</label><br />
        <input
          type="range"
          min={1}
          max={1000000}
          value={inputData.type1}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type1: Number(e.target.value) }))
          }
        />
        <br /><br />

        <label>Return percentage %</label><br />
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

        <label>Time Period (Years)</label><br />
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

      <div style={{ display: 'flex', marginTop: '40px', alignItems: 'center' }}>
        <Chart RealData={inputData} />
        
        {/* Right Side Details */}
        <div style={{ marginLeft: '40px' }}>
          <h3 style={{ margin: '10px 0' }}>Investment: ₹{inputData.type1.toLocaleString()}</h3>
          <h3 style={{ margin: '10px 0' }}>Return: {inputData.type2}%</h3>
          <h3 style={{ margin: '10px 0' }}>Time: {inputData.type3} years</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
