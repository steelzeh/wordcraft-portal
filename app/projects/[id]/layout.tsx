import React from 'react';
import Navbar, { NavigationItem } from '@/components/navigation/Navbar';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: `dashboard`, current: true },
    { name: 'Editor', href: `editor`, current: false },
    { name: 'Languages', href: `languages`, current: false },
    { name: 'Settings', href: `settings`, current: false },
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
