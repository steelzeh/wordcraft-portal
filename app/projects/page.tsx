'use client'

import React from "react";
import ProjectBox from "@/components/dashboard/ProjectBox";
import Navbar, {NavigationItem} from "@/components/navigation/Navbar";
import {useRouter} from "next/navigation";

const navigation: NavigationItem[] = [
  {name: 'Projects', href: '/projects', current: true},
  {name: 'Team', href: '#', current: false},
  {name: 'Billing', href: '#', current: false},
]

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <Navbar items={navigation} />
      <div className="w-full h-full overflow-y-scroll bg-gray-100">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            </div>
          </header>

          <main className="flex flex-col gap-10">

            <div className="flex flex-col gap-6 w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
              <ProjectBox onClick={ () => router.push('projects/project-id-1') } />
              <ProjectBox onClick={ () => router.push('projects/project-id-2') } />
              <ProjectBox onClick={ () => router.push('projects/project-id-3') } />
            </div>

            {/*<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">*/}
            {/*  <EmptyState*/}
            {/*    title="No projects"*/}
            {/*    description="Create a new project in 5 minutes"*/}
            {/*    buttonText="New project"*/}
            {/*  />*/}
            {/*</div>*/}
          </main>
        </div>
      </div>
    </>
  )
}
