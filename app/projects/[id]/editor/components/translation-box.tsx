import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useRef, useState } from 'react';
import { classNames } from '@/utils/html-util';
import { ITranslation, ITranslationAsset } from '@/utils/mocks/translations.mock';
import { CheckIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import Dropdown from '@/components/shared/dropdown';
import { ImTextColor } from 'react-icons/im';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

type TranslationBoxProps = {
  translation: ITranslationAsset;
  isSelected: boolean;
};

interface TextRefs {
  [key: string]: HTMLTextAreaElement; // or a more specific type if you know it
}

export default function TranslationBox({ props, didSelect }: { props: TranslationBoxProps; didSelect: (t: any) => void }) {
  const [selectedTextArea, setSelectedTextArea] = useState<HTMLTextAreaElement>();
  const textRefs = useRef<TextRefs>({});

  const [assets, setAssets] = useState<{ [langCode: string]: ITranslation }>({});

  useEffect(() => {
    const newAssets: { [langCode: string]: ITranslation } = {};

    props.translation.languages.forEach(tr => {
      newAssets[tr.lang] = tr;
    });

    setAssets(newAssets);
  }, [props.translation]);

  function selectTextArea(langCode: string) {
    const textarea = textRefs.current[langCode];

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
          <input type="checkbox" defaultChecked={false} className="checkbox checkbox-primary focus:ring-transparent" />
          <p className="break-all font-medium">{props.translation.key}</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hover:bg-success/25 tooltip tooltip-secondary flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 p-1"
            data-tip="Mark as verfied">
            <CheckIcon className="h-4 w-4 text-black" />
          </div>

          <Dropdown>
            <div className="flex cursor-pointer rounded-lg p-2 hover:bg-gray-200">
              <Cog8ToothIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </div>
          </Dropdown>
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
            className={classNames(index === props.translation.languages.length - 1 ? '' : 'border-b', 'flex flex-col p-4')}
            onClick={e => {
              e.stopPropagation();
              selectTextArea(asset.lang);
            }}>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg bg-gray-400 px-1 py-0.5">
                <label className="text-xs text-white">{asset.lang}</label>
              </div>

              <p>🇩🇰</p>
              <p className="font-medium">{asset.lang}</p>
            </div>

            <div className="mb-1">
              <TextareaAutosize
                ref={tag => {
                  if (tag) {
                    textRefs.current[asset.lang] = tag;
                  }
                }}
                onClick={e => {
                  e.stopPropagation();
                  didSelect(props.translation);
                  setSelectedTextArea(e.currentTarget);
                }}
                onChange={e => {
                  setAssets(prevAssets => ({
                    ...prevAssets,
                    [asset.lang]: {
                      ...prevAssets[asset.lang],
                      value: e.target.value,
                    },
                  }));
                }}
                defaultValue={asset.value}
                className="w-full resize-none border-none bg-transparent p-0 focus:ring-0"
              />
            </div>

            {selectedTextArea === textRefs.current[asset.lang] && props.isSelected ? (
              <div className="flex items-center justify-between">
                <div>
                  <button
                    className="btn btn-xs rounded-full bg-gray-100 normal-case"
                    onClick={e => {
                      e.stopPropagation();
                      selectedTextArea?.blur();
                      setSelectedTextArea(undefined);
                    }}>
                    Discard
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex cursor-pointer rounded-lg p-1 hover:bg-gray-200">
                    <EllipsisHorizontalIcon className="h-4 w-4 text-black" aria-hidden="true" />
                  </div>

                  {assets[asset.lang]?.char_limit ? (
                    <p className="text-sm text-gray-400">{assets[asset.lang]?.value.length}/32</p>
                  ) : (
                    <div className="flex cursor-pointer rounded-lg p-1 hover:bg-gray-200">
                      <ImTextColor />
                    </div>
                  )}
                  <button className="btn btn-xs btn-primary rounded-full normal-case">Save</button>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
