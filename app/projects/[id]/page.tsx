'use client';

import React from 'react';
import StatsBox, { StatsItem } from '@/components/dashboard/StatsBox';
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline';
import DashboardLanguages from '@/app/projects/[id]/components/dashboard-languages';
import DashboardHistory from '@/app/projects/[id]/components/dashboard-history';
import DashboardChart from '@/app/projects/[id]/components/dashboard-chart';

const stats: StatsItem[] = [
  { id: 1, name: 'Total keys', stat: '2.312', icon: UsersIcon, change: '122', changeType: 'increase', showChange: false },
  { id: 2, name: 'Total strings', stat: '6.939', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase', showChange: false },
  { id: 3, name: 'Translated keys', stat: '70%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease', showChange: false },
];

export default function Dashboard() {
  return (
    <>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>

        <main className="flex flex-col gap-10">
          <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
            <div>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map(item => (
                  <StatsBox key={item.id} item={item} />
                ))}
              </dl>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
            <DashboardLanguages />
          </div>

          <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
            <DashboardHistory />
          </div>

          <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
            <DashboardChart />
          </div>
        </main>
      </div>
    </>
  );
}
