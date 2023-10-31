import { classNames } from '@/utils/html-util';
import React from 'react';

export default function ProjectSettings() {
  const tabs = [
    { name: 'General', href: '#', current: false },
    { name: 'Members', href: '#', current: false },
    { name: 'Import', href: '#', current: true },
    { name: 'Export', href: '#', current: false },
    { name: 'Hired', href: '#', current: false },
  ];

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="relative w-full border-b border-gray-200 py-10 pb-5 sm:pb-0">
        <div className="md:flex md:items-center md:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <div className="mt-3 flex md:absolute md:right-0 md:top-10 md:mt-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Share
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Create
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find(tab => tab.current)?.name}>
              {tabs.map(tab => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}>
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
