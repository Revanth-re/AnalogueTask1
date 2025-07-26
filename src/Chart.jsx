
import { Cell, Pie, PieChart, Tooltip, Legend, LabelList } from 'recharts';

const COLORS = ['#4f8ef7', '#a5c6ff', '#cce0ff']; 

export default function Chart({ RealData }) {
  const newData = [
    { name: 'Investment', value: RealData.type1 },
    { name: 'Return %', value: RealData.type2 },
    { name: 'Time (Years)', value: RealData.type3 },
  ];

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={newData}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={110}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        labelLine={false}
      >
        {newData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}

    
        <LabelList
          dataKey="value"
          position="outside"
          formatter={(val, entry) => `${entry.name}: ${val}`}
          style={{ fontSize: 14 }}
        />
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" iconType="circle" />
    </PieChart>
  );
}
