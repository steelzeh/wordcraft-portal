import React from 'react';
import Navbar, { NavigationItem } from '@/components/navigation/Navbar';
import supabase from '@/supabase/supabase';
import ProjectBox from '@/app/projects/components/projectBox';
import EmptyState from '@/components/shared/EmptyState';

const navigation: NavigationItem[] = [
  { name: 'Projects', href: '/projects', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
];

export default async function Dashboard() {
  const projects = await supabase.from('project').select();

  return (
    <>
      <Navbar items={navigation} />
      <div className="bg-base-300 h-full w-full overflow-y-scroll">
        <div className="h-full py-10">
          <header className="mb-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            </div>
          </header>

          <main className="flex h-full flex-col gap-10">
            {projects.data?.length ?? 0 > 0 ? (
              projects.data?.map(p => (
                <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
                  <ProjectBox project={p} />
                </div>
              ))
            ) : (
              <div className="mx-auto h-full w-full max-w-7xl sm:px-6 lg:px-8">
                <EmptyState title="No projects" description="Create a new project in 5 minutes" buttonText="New project" />
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
