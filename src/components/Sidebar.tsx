import React, { useState } from 'react';
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CustomerDemographics from './CustomerDemographics';
// import DataPanel from './DataPanel';


const Sidebar: React.FC = () => {
  const [isCustomerDemographicsOpen, setIsCustomerDemographicsOpen] = useState(false);
  const [isDataPanelOpen, setIsDataPanelOpen] = useState(false);

  const menuItems = [
    { icon: "lucide:home", label: "Dashboard" },
    { icon: "lucide:users", label: "Customers", onClick: () => setIsCustomerDemographicsOpen(true) },
    { icon: "lucide:briefcase", label: "Deals" },
    { icon: "lucide:bar-chart", label: "Analytics" },
    { icon: "lucide:settings", label: "Settings my ass" },
    { icon: "lucide:database", label: "Data", onClick: () => setIsDataPanelOpen(true) },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-content1 p-4 flex flex-col"
    >
      <div className="flex items-center justify-center mb-8">
        <Icon icon="lucide:box" width={32} height={32} className="text-primary" />
        <span className="text-xl font-bold ml-2">CRM Pro</span>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="light"
            className="w-full justify-start mb-2 glow-on-hover"
            startContent={<Icon icon={item.icon} width={20} height={20} />}
            onPress={item.onClick}
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <CustomerDemographics 
        isOpen={isCustomerDemographicsOpen} 
        onClose={() => setIsCustomerDemographicsOpen(false)} 
      />
<DataPanel
  isOpen={isDataPanelOpen}
  onClose={() => setIsDataPanelOpen(false)}
/>

    </motion.aside>
  );
};

export default Sidebar;
