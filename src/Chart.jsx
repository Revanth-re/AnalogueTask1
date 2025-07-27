
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ["blue", 'orange'];

export default function Chart({ RealData }) {
  console.log(RealData);
  

  // const monthlyInvestment = RealData.type1;
  // const returnRate = RealData.type2 / 100;
  // const years = RealData.type3;
// console.log(years);

const a=RealData.type3*12
// console.log(a,"percentage");
const actual_amount=RealData.type1*a
// console.log(actual_amount,"ibuhugiu");

// console.log(actual_amount/12,"actual amount");

const returns=RealData.type1*RealData.type3*RealData.type2/100
const actual_returns=returns*12
console.log(actual_returns,"hbhjj");



// console.log(actual_amount);


//   const months = years * 12;
//   const monthlyRate = returnRate / 12;

//   // console.log(monthlyRate);
  
//   const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
//   const totalInvested = monthlyInvestment * months;
//   const gain = futureValue - totalInvested;
//   // console.log(gain);
  


  const data = [
    { name: 'Invested Amount (₹)', value:actual_amount },
    { name: 'Estimated Returns (₹)', value:actual_returns }
  ];
//   // console.log(data);

//   const total = totalInvested + gain;
// console.log(total);

  return (
    <div style={{ position: 'relative', width: '360px', height: '360px' }}>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={3}
            dataKey="value"
            isAnimationActive={true}
            animationDuration={600}
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`₹${value.toLocaleString()}`, name]}
          />
        </PieChart>
      </ResponsiveContainer>

      
<div style={{border:"2px solid black",padding:"5%"}}>
  <p>Invested Amount (₹):<h3>{actual_amount}</h3></p>
  <p>Estimated Returns (₹): <h3>{actual_returns}</h3></p>
  <p>Total Returns: <h3>{actual_amount+actual_returns}</h3></p>
</div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
             </div>
    </div>
  );
}
