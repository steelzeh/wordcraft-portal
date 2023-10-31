import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/html-util';

export type StatsItem = { id: number; name: string; stat: string; icon: any; change: string; changeType: string; showChange: boolean };

export default function StatsBox({ item }: { item: StatsItem }) {
  return (
    <div className="bg-base-100 relative overflow-hidden rounded-lg px-4 pt-5 shadow sm:px-6 sm:pt-6">
      <dt>
        <div className="bg-primary absolute rounded-md p-3">
          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
      </dt>
      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
        <p
          className={classNames(
            item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
            'ml-2 flex items-baseline text-sm font-semibold'
          )}>
          {item.showChange ? (
            <>
              {item.changeType === 'increase' ? (
                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
              ) : (
                <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
              )}

              <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
              {item.change}
            </>
          ) : (
            ''
          )}
        </p>
      </dd>
    </div>
  );
}
