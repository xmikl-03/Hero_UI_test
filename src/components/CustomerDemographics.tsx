import React from 'react';
import { Modal } from '@heroui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomerDemographics: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Customer Segments">
      <div className="space-y-2">
        <p>Enterprise: 400 customers</p>
        <p>SMB: 300 customers</p>
        <p>Startup: 200 customers</p>
        <p>Individual: 100 customers</p>
      </div>
    </Modal>
  );
};

export default CustomerDemographics;
