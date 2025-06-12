import React from 'react';
import { Modal, Tabs, Tab } from '@heroui/react';
import ChartDataTable from './ChartDataTable';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DataPanel: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Chart Data" size="xl">
      <div className="p-4">
        <Tabs>
          <Tab title="Customer Segmentation">
            <ChartDataTable chartKey="customerSegmentation" />
          </Tab>
          <Tab title="Deal Funnel">
            <ChartDataTable chartKey="dealFunnel" />
          </Tab>
          <Tab title="Revenue by Product">
            <ChartDataTable chartKey="revenueByProduct" />
          </Tab>
        </Tabs>
      </div>
    </Modal>
  );
};

export default DataPanel;
