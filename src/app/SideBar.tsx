import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="text-2xl font-bold p-6">Rental Dashboard</div>
      <ul className="flex-1">
        {['Dashboard', 'Car Rent', 'Insight', 'Reimburse', 'Inbox', 'Calendar'].map((item) => (
          <li key={item} className="hover:bg-gray-700 p-4 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <ul className="border-t border-gray-700">
        {['Settings', 'Help & Center', 'Dark Mode'].map((item) => (
          <li key={item} className="hover:bg-gray-700 p-4 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <button className="p-4 text-left hover:bg-red-600">Log Out</button>
    </div>
  );
};

export default Sidebar;
