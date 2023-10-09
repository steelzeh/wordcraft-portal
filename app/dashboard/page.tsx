'use client'

import {CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon} from '@heroicons/react/24/outline'
import React from "react";
import StatsBox, {StatsItem} from "@/components/dashboard/StatsBox";
import ProjectBox from "@/components/dashboard/ProjectBox";

const stats: StatsItem[] = [
  {id: 1, name: 'Total keys', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase', showChange: false},
  {id: 2, name: 'Translated keys', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase', showChange: false},
  {id: 3, name: 'Languages', stat: '2', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease', showChange: false},
]


export default function Dashboard() {
  return (
    <>
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>

        <main className="flex flex-col gap-10">
          <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                  <StatsBox key={item.id} item={item}/>
                ))}
              </dl>
            </div>
          </div>

          {/*<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">*/}
          {/*  <EmptyState*/}
          {/*    title="No projects"*/}
          {/*    description="Create a new project in 5 minutes"*/}
          {/*    buttonText="New project"*/}
          {/*  />*/}
          {/*</div>*/}

          <div className="flex flex-col gap-6 w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </div>
        </main>
      </div>
    </>
  )
}
