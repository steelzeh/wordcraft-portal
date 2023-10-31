import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full max-h-full w-full max-w-full flex-col">{children}</div>;
}
