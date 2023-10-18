'use client';

import React from 'react';
import Navbar, { NavigationItem } from '@/components/navigation/Navbar';
import { useParams } from 'next/navigation';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const projectId = params.id as string;

  const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: `/projects/${projectId}`, current: true },
    { name: 'Editor', href: `/projects/${projectId}/editor`, current: false },
    { name: 'Languages', href: '#', current: false },
    { name: 'Settings', href: '#', current: false },
    { name: 'Import', href: '#', current: false },
    { name: 'Export', href: '#', current: false },
  ];

  return (
    <div className="flex h-full max-h-full w-full max-w-full flex-col">
      <Navbar items={navigation} />
      <div className="bg-base-300 h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}
