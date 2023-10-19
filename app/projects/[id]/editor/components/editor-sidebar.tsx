import React, { Dispatch, SetStateAction } from 'react';
import { classNames } from '@/utils/html-util';

export default function EditorSidebar({
  isSmallScreen,
  setIsSidebarVisible,
}: {
  isSmallScreen: boolean;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={classNames(isSmallScreen ? 'absolute right-0' : '', 'bg-base-100 flex h-full w-[300px] flex-col overflow-auto border-l')}>
      {/* Sidebar Content */}
      <button onClick={() => setIsSidebarVisible(prevState => !prevState)}>Toggle Sidebar</button>
      Sidebar content...
    </aside>
  );
}
