import ProgressBar from '@/components/shared/ProgressBar';
import React from 'react';
import Supabase from '@/supabase/supabase';

export default function LanguagesLangBox({ language, percentage }: { language: ProjectLang; percentage?: ProjectLangPercentage }) {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-lg bg-white p-4 hover:bg-gray-100">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-white"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
            alt=""
          />
          <p className="text-xl font-medium">{language.name}</p>

          {language.is_base ? (
            <div className="flex items-center justify-center rounded-full bg-gray-200 px-4">
              <p>Base</p>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 ">
            <span className="h-3 w-3 rounded-full bg-primary/90"></span>
            <p className="text-sm text-gray-600">Translated</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary/25"></span>
            <p className="text-sm text-gray-600">Not translated</p>
          </div>
        </div>
      </div>

      <ProgressBar progress={percentage?.translation_percentage ?? 0} />
    </div>
  );
}
