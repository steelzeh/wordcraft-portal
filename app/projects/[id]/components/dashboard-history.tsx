import React from 'react';
import DashboardFeed from '@/app/projects/[id]/components/dashboard-feed';

export default function DashboardHistory() {
  return (
    <div className="bg-base-100 relative overflow-hidden rounded-lg p-5 shadow sm:px-6 sm:pt-6">
      <h2 className="mb-10">History</h2>
      <div className="flex flex-col gap-10">
        <DashboardFeed />
      </div>
    </div>
  );
}
