import ProgressBar from '@/components/shared/ProgressBar';
import React from 'react';

export default function DashboardLanguages() {
  return (
    <div className="bg-base-100 relative overflow-hidden rounded-lg p-5 shadow sm:px-6 sm:pt-6">
      <h2 className="mb-10">Languages</h2>
      <div className="-mx-4 flex flex-col gap-6">
        <LanguageBox />
        <LanguageBox />
        <LanguageBox />
      </div>
    </div>
  );
}

function LanguageBox() {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-lg p-4 hover:bg-gray-100">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-white"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
            alt=""
          />
          <p className="text-xl font-medium">English</p>

          <div className="flex items-center justify-center rounded-full bg-gray-200 px-4">
            <p>Base</p>
          </div>
        </div>

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
  );
}
