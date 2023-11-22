'use client';

import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ArchiveBoxIcon, DocumentDuplicateIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/html-util';

export default function Dropdown({ children, onDropdownClick }: { children: React.ReactNode; onDropdownClick: (e: string) => void }) {
  return (
    <Menu as="div" className="relative z-0 inline-block text-left">
      <div>
        <Menu.Button>{children}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onDropdownClick('edit')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}>
                  <PencilSquareIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onDropdownClick('duplicate')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}>
                  <DocumentDuplicateIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onDropdownClick('archive')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}>
                  <ArchiveBoxIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  Archive
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => onDropdownClick('delete')}
                  className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-error', 'group flex items-center px-4 py-2 text-sm')}>
                  <TrashIcon className="mr-3 h-5 w-5 text-error group-hover:text-gray-500" aria-hidden="true" />
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
