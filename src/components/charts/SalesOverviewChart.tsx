import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', sales: 4000, target: 2400 },
  { month: 'Feb', sales: 3000, target: 2800 },
  { month: 'Mar', sales: 5000, target: 3200 },
  { month: 'Apr', sales: 2780, target: 3600 },
  { month: 'May', sales: 1890, target: 4000 },
  { month: 'Jun', sales: 2390, target: 4400 },
  { month: 'Jul', sales: 3490, target: 4800 },
];

const SalesOverviewChart: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      // Attempt to create a LineChart to check for any initialization errors
      new LineChart({});
    } catch (err) {
      setError("Error initializing chart: " + (err instanceof Error ? err.message : String(err)));
    }
  }, []);

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '20px',
              padding: '10px',
              color: 'white'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="target" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SalesOverviewChart;