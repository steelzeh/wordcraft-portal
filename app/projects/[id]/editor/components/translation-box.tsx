import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useState } from 'react';
import { classNames } from '@/utils/html-util';
import { ITranslation, ITranslationAsset, translations } from '@/utils/mocks/translations.mock';

type TranslationBoxProps = {
  translation: ITranslationAsset;
  isSelected: boolean;
};

export default function TranslationBox({ props, didSelect }: { props: TranslationBoxProps; didSelect: (t: any) => void }) {
  const [selectedTextArea, setSelectedTextArea] = useState<HTMLTextAreaElement>();
  const textAreas: { [langCode: string]: any } = {};

  function selectTextArea(langCode: string) {
    const textarea = textAreas[langCode];

    if (!textarea) {
      return;
    }

    textarea.focus();
    setSelectedTextArea(textarea);

    const textLength = textarea.value.length;
    textarea.selectionStart = textLength;
    textarea.selectionEnd = textLength;

    didSelect(props.translation);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input type="checkbox" defaultChecked={true} className="checkbox-primary focus:ring-0" />
          <p className="break-all font-medium">{props.translation.key}</p>
        </div>
      </div>

      <div
        className={classNames(
          props.isSelected ? 'border-primary border' : '',
          'bg-base-100 flex w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-lg border-2'
        )}>
        {props.translation.languages.map((asset: ITranslation, index) => (
          <div
            key={asset.lang}
            className={classNames(index === props.translation.languages.length - 1 ? '' : 'border-b', 'flex flex-col gap-4 p-4')}
            onClick={e => {
              e.stopPropagation();
              selectTextArea(asset.lang);
            }}>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg bg-gray-400 px-1 py-0.5">
                <label className="text-xs text-white">{asset.lang}</label>
              </div>

              <p>🇩🇰</p>
              <p className="font-medium">{asset.lang}</p>
            </div>

            <div className="">
              <TextareaAutosize
                ref={tag => (textAreas[asset.lang] = tag)}
                onClick={e => {
                  e.stopPropagation();
                  setSelectedTextArea(e.currentTarget);
                  didSelect(props.translation);
                }}
                defaultValue={asset.value}
                className="w-full resize-none border-none bg-transparent p-0 focus:ring-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
