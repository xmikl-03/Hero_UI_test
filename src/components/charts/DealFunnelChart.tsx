import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';
import { motion } from 'framer-motion'; } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Leads', value: 5000 },
  { name: 'Qualified', value: 3000 },
  { name: 'Proposal', value: 2000 },
  { name: 'Negotiation', value: 1500 },
  { name: 'Closed', value: 1000 },
];

const DealFunnelChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onFunnelEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
         <Tooltip
  content={({ payload }) => {
    if (!payload || payload.length === 0) return null;
    const { name, value, color } = payload[0];
    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          borderRadius: '12px',
          padding: '10px',
          color: color ?? 'white',
        }}
      >
        <strong>{name}</strong>: {value}
      </div>
    );
  }}
/>

          <Funnel
            dataKey="value"
            data={data}
            isAnimationActive
            onMouseEnter={onFunnelEnter}
          >
            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                style={{
                  transform: `translateY(${activeIndex === index ? -5 : 0}px)`,
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
            ))}
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default DealFunnelChart;
