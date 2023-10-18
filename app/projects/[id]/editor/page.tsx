'use client';

import React, { useState } from 'react';
import EditorSidebar from '@/app/projects/[id]/editor/components/editor-sidebar';
import TranslationBox from '@/app/projects/[id]/editor/components/translation-box';
import EditorToolbar from '@/app/projects/[id]/editor/components/editor-toolbar';
import { ITranslationAsset, translations } from '@/utils/mocks/translations.mock';

export default function Editor() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState<ITranslationAsset>();

  return (
    <div className="bg-base-200 flex h-full">
      <main className={`relative flex flex-1 flex-col overflow-y-scroll ${isSidebarVisible ? 'md:w-3/4' : 'w-full'} gap-4`}>
        {/* Toolbar */}
        <EditorToolbar />

        {/* Editor */}
        <div className="flex flex-col gap-6 p-6">
          {translations.map((translation, index) => (
            <TranslationBox
              props={{ translation, isSelected: selectedTranslation?.key === translation.key }}
              key={index}
              didSelect={t => {
                setSelectedTranslation(t);
              }}
            />
          ))}
        </div>
      </main>

      <div className="block md:hidden">
        {isSidebarVisible && <EditorSidebar isSmallScreen={true} setIsSidebarVisible={setIsSidebarVisible} />}
      </div>

      <div className="hidden md:block">
        <EditorSidebar isSmallScreen={false} setIsSidebarVisible={setIsSidebarVisible} />
      </div>
    </div>
  );
}
