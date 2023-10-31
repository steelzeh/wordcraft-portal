import React from 'react';
import LanguagesLangBox from '@/app/projects/[id]/languages/components/language';
import { MdOutlineAdd } from 'react-icons/md';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Languages() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from('project_language').select().order('created_at');
  const percentages = await supabase.rpc('fetch_project_languages_with_percentage').select();

  return (
    <div className="h-full w-full overflow-y-scroll">
      <div className="py-10">
        <header className="mb-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Languages</h1>
            <button className="btn btn-primary flex items-center font-bold">
              <MdOutlineAdd className="h-5 w-5" />
              Add language
            </button>
          </div>
        </header>

        <main className="flex flex-col gap-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:px-6 lg:px-8">
            {data?.map(lang => (
              <LanguagesLangBox language={lang} percentage={percentages.data?.find(p => p.language_name === lang.code)} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
