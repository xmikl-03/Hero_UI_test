import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Enterprise', value: 400 },
  { name: 'SMB', value: 300 },
  { name: 'Startup', value: 200 },
  { name: 'Individual', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomerSegmentationChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        <Tooltip
  content={({ payload }) => {
    if (!payload || payload.length === 0) return null;
    const { name, value, color } = payload[0];
    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.35)', // 30% more transparent than 0.5
          borderRadius: '12px',
          padding: '10px',
          color: color ?? 'white',
        }}
      >
        <strong>{name}</strong>: {value}
      </div>
    );
  }}
  cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
/>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default CustomerSegmentationChart;
