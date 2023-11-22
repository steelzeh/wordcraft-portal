'use client';

import React, { useEffect, useState } from 'react';
import EditorSidebar from '@/app/projects/[id]/editor/components/editor-sidebar';
import TranslationBox from '@/app/projects/[id]/editor/components/translation-box';
import EditorToolbar from '@/app/projects/[id]/editor/components/editor-toolbar';
import { ITranslationAsset } from '@/utils/mocks/translations.mock';
import { usePathname, useRouter } from 'next/navigation';

export default function EditorClient() {
  const projectId = usePathname().split('/')[2];

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState<ITranslationAsset>();

  const [data, setData] = useState<ITranslationAsset[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/translations?project_id=${projectId}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main className={`relative flex flex-1 flex-col overflow-y-scroll ${isSidebarVisible ? 'md:w-3/4' : 'w-full'} gap-4`}>
        {/* Toolbar */}
        <EditorToolbar />

        {/* Editor */}
        <div className="flex flex-col gap-6 p-6">
          {data.map((translation, index) => (
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
    </>
  );
}
