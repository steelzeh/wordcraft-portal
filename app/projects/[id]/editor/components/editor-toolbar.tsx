import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import Dropdown from '@/components/shared/dropdown';
import { MdOutlineAdd } from 'react-icons/md';

export default function EditorToolbar() {
  return (
    <div className="bg-base-100 sticky top-0 z-10 flex items-center justify-between gap-4 p-4 shadow">
      <div className="flex items-center gap-4">
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="mobile-search-candidate"
              id="mobile-search-candidate"
              className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:hidden"
              placeholder="Search"
            />
            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className="hidden w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:block sm:text-sm"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <BarsArrowUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2">Sort</span>
            <ChevronDownIcon className="-mr-1.5 ml-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>

          <Dropdown>
            <div className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="ml-2">Filter</span>
              <ChevronDownIcon className="-mr-1.5 ml-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </Dropdown>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn btn-primary btn-sm">
          <MdOutlineAdd className="h-5 w-5" aria-hidden="true" />
          Add
        </button>
      </div>
    </div>
  );
}
