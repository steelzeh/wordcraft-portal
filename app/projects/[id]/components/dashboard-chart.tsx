'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import React from 'react';

const data = [
  {
    Month: 'Jan 21',
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: 'Feb 21',
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: 'Jan 22',
    Sales: 3890,
    Profit: 2980,
  },
];

export default function DashboardChart() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white p-5 shadow sm:px-6 sm:pt-6">
      <h2 className="mb-1">Activity</h2>
      <p className="mb-8 text-gray-400">Last 30 days</p>
      <div>
        <AreaChart
          className="h-80"
          data={data}
          categories={['Sales', 'Profit']}
          index="Month"
          colors={['indigo', 'fuchsia']}
          valueFormatter={(number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`}
          yAxisWidth={60}
        />
      </div>
    </div>
  );
}
