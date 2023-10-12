import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full h-full max-h-full max-w-full">
          { children}
        </div>
    )
}
