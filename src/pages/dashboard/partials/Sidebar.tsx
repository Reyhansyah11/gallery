import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-slate-100 text-black flex flex-col">
      <div className="px-4 py-6">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Profile</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Logout</a>
      </nav>
    </div>
  );
};

export default Sidebar;
