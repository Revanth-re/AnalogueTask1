
import React, { useState } from 'react';
import Chart from "./Chart.jsx";

const App = () => {
  const [inputData, setInputData] = useState({
    type1: 0, // Monthly Investment
    type2: 0, // Return %
    type3: 0, // Time Period (Years)
  });

  return (
    <div>
      <form>
        <label>Monthly Investment</label> <br />
        <input
          type="range"
          min={1}
          max={1000000}
          value={inputData.type1}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type1: Number(e.target.value) }))
          }
        />
        <br />
        <label>Return percentage %</label> <br />
        <input
          type="range"
          min={1}
          max={100}
          value={inputData.type2}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type2: Number(e.target.value) }))
          }
        />
        <br />
        <label>Time Period (Years)</label> <br />
        <input
          type="range"
          min={1}
          max={40}
          value={inputData.type3}
          onChange={(e) =>
            setInputData((prev) => ({ ...prev, type3: Number(e.target.value) }))
          }
        />
        <br />
      </form>

      <div>
        <h1>Investment: ₹{inputData.type1}</h1>
        <h1>Return: {inputData.type2}%</h1>
        <h1>Time: {inputData.type3} years</h1>
      </div>

      <Chart RealData={inputData} />
    </div>
  );
};

export default App;
