interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DataPanel: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Chart Data Editor">
      <Tabs>
        <Tab title="Customer Segmentation">
          <ChartDataTable chartKey="customerSegmentation" />
        </Tab>
        <Tab title="Deal Funnel">
          <ChartDataTable chartKey="dealFunnel" />
        </Tab>
        {/* Add other chart editors here */}
      </Tabs>
    </Modal>
  );
};

