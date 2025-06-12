import React from 'react';
import { Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import SalesOverviewChart from './charts/SalesOverviewChart';
import CustomerSegmentationChart from './charts/CustomerSegmentationChart';
import DealFunnelChart from './charts/DealFunnelChart';
import RevenueByProductChart from './charts/RevenueByProductChart';

const Dashboard: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);

  const renderChart = (ChartComponent: React.FC, title: string) => {
    try {
      return (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">{title}</h2>
          </CardHeader>
          <CardBody>
            <ChartComponent />
          </CardBody>
        </Card>
      );
    } catch (err) {
      setError(`Error rendering ${title}: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  };

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderChart(SalesOverviewChart, "Sales Overview")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {renderChart(CustomerSegmentationChart, "Customer Segmentation")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {renderChart(DealFunnelChart, "Deal Funnel")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {renderChart(RevenueByProductChart, "Revenue by Product")}
      </motion.div>
    </div>
  );
};

export default Dashboard;