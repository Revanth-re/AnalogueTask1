
import { Cell, Pie, PieChart } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Chart({ RealData }) {
  const newData = [
    { name: 'Monthly Investment', value: RealData.type1 },
    { name: 'Return %', value: RealData.type2 },
    { name: 'Time (Years)', value: RealData.type3 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={newData}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {newData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
         
      </Pie>
    </PieChart>
  );
}
