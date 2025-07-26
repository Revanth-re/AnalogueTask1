
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ["blue", 'orange'];

export default function Chart({ RealData }) {
  console.log(RealData);
  
  const monthlyInvestment = RealData.type1;
  const returnRate = RealData.type2 / 100;
  const years = RealData.type3;
console.log(years);

  const months = years * 12;
  const monthlyRate = returnRate / 12;

  console.log(monthlyRate);
  
  const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
  const totalInvested = monthlyInvestment * months;
  const gain = futureValue - totalInvested;
  console.log(gain);
  


  const data = [
    { name: 'Invested Amount (₹)', value: totalInvested },
    { name: 'Estimated Returns (₹)', value: gain },
  ];
  console.log(data);

  const total = totalInvested + gain;
console.log(total);

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
            formatter={(value, name) => [`₹${Math.round(value).toLocaleString()}`, name]}
          />
        </PieChart>
      </ResponsiveContainer>

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
