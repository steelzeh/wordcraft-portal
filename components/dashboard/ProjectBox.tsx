import Avatar from '@/components/shared/Avatar';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import ProgressBar from '@/components/shared/ProgressBar';
import React from 'react';

type ProjectBoxProps = {
  onClick: React.MouseEventHandler;
};

export default function ProjectBox({ onClick }: ProjectBoxProps) {
  return (
    <div
      onClick={onClick}
      className="bg-base-100 relative cursor-pointer overflow-hidden rounded-lg p-5 shadow hover:bg-gray-50 sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar />
            <p className="text-xl">Bodil - Portal</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>

            <ChevronRightIcon className="h-10 w-10 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-4">
            <p className="font-medium text-gray-600">679 keys</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <span className="bg-primary/90 h-3 w-3 rounded-full"></span>
                <p className="text-sm text-gray-600">Translated</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-primary/25 h-3 w-3 rounded-full"></span>
                <p className="text-sm text-gray-600">Not translated</p>
              </div>
            </div>
          </div>

          <ProgressBar progress={75} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-1 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg"
              alt=""
            />
          </div>

          <h1 className="text-orange-400">75%</h1>
        </div>
      </div>
    </div>
  );
}
