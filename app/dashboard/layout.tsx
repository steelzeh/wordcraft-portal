import Navbar from "@/components/Navbar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full h-full max-h-full max-w-full">
            <Navbar />
            <div className="w-full h-full overflow-y-scroll bg-gray-100">
                { children}
            </div>
        </div>
    )
}
