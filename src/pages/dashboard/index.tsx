import React from 'react';
import Sidebar from './partials/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Konten utama dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
