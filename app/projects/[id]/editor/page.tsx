import React from 'react';
import EditorClient from '@/app/projects/[id]/editor/components/editor';

export default async function Editor() {
  return (
    <div className="flex h-full bg-base-200">
      <EditorClient />
    </div>
  );
}
