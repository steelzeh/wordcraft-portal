import React from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="pt-1">
      <div className="bg-primary/25 flex h-2 overflow-hidden rounded-full text-xs">
        <div
          style={{ width: `${progress}%` }}
          className="bg-primary/90 flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none"></div>
      </div>
    </div>
  );
}
