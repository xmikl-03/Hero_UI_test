import React from 'react';
import { Navbar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar key="sidebar" />
        )}
      </AnimatePresence>
      <div className="flex flex-col flex-grow">
        <Navbar maxWidth="full" className="px-4">
          <Button
            isIconOnly
            variant="light"
            className="glow-on-hover"
            onPress={toggleSidebar}
          >
            <Icon icon="lucide:menu" width={24} height={24} />
          </Button>
          <h1 className="text-xl font-bold">CRM Analytics Dashboard</h1>
        </Navbar>
        <main className="flex-grow p-6 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;