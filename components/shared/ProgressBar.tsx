import React from "react";

export default function ProgressBar({progress}: {progress: number}) {
  return (
    <div className="pt-1">
      <div className="overflow-hidden h-2 text-xs flex rounded-full bg-primary-light/25">
        <div style={{width: `${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-normal/90"></div>
      </div>
    </div>
  )
}
