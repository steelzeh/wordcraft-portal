'use client';

import React, { useState } from 'react';

export default function Editor() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <main className={`relative flex flex-1 flex-col overflow-hidden ${isSidebarVisible ? 'md:w-3/4' : 'w-full'}`}>
        {/* Main Content */}
        Content here...
        {/* Sidebar Toggle Button for smaller screens */}
        <button className="absolute right-5 top-5 md:hidden" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          Toggle Sidebar
        </button>
      </main>

      <Sidebar isSidebarVisible={false} />
    </div>
  );
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar: React.FC<{ isSidebarVisible: boolean }> = ({ isSidebarVisible }) => {
  console.log(isSidebarVisible);
  return (
    <aside className="absolute right-0 hidden h-full w-64 overflow-auto bg-white md:block md:w-[300px]">
      {/* Sidebar Content */}
      Sidebar content...
    </aside>
  );
};
