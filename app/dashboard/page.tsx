'use client'

import {CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon} from '@heroicons/react/24/outline'
import React from "react";
import {PlusIcon} from "@heroicons/react/24/solid";
import EmptyState from "@/components/shared/EmptyState";
import StatsBox, {StatsItem} from "@/components/dashboard/StatsBox";
import Avatar from "@/components/shared/Avatar";

const stats: StatsItem[] = [
  {id: 1, name: 'Total keys', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase', showChange: false},
  {id: 2, name: 'Translated keys', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase', showChange: true},
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

          <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg bg-white p-5 shadow sm:px-6 sm:pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <Avatar />
                  <p className="text-xl">Bodil</p>
                </div>

                <div className="pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-50">
                    <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
