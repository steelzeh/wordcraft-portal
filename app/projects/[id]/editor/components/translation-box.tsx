import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useRef, useState } from 'react';
import { classNames } from '@/utils/html-util';
import { ITranslation, ITranslationAsset } from '@/utils/mocks/translations.mock';
import { CheckIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import Dropdown from '@/components/shared/Dropdown';
import { ImTextColor } from 'react-icons/im';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import MessageDialog from '@/components/shared/MessageDialog/MessageDialog';
import { EMessageDialogType } from '@/components/shared/MessageDialog/dialog-types.enum';
import toast from 'react-hot-toast';

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
  const [isLoading, setIsLoading] = useState(false);

  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [messageDialogType, setMessageDialogType] = useState<EMessageDialogType>(EMessageDialogType.discard_changes);

  useEffect(() => {
    const newAssets: { [langCode: string]: ITranslation } = {};

    props.translation.translations.forEach(tr => {
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

  async function updateTranslation(asset: ITranslation) {
    setIsLoading(true);

    if (!asset.id) {
      fetch(`/api/translations`, {
        method: 'POST',
        body: JSON.stringify({ translation: asset.translation, key_id: props.translation.id, language_id: asset.lang_id }),
      })
        .then(res => res.json())
        .then((data: ITranslation) =>
          setAssets(prevAssets => ({
            ...prevAssets,
            [asset.lang]: {
              ...data,
            },
          }))
        )
        .finally(() => {
          setIsLoading(false);
          setSelectedTextArea(undefined);
        });

      return;
    }

    fetch(`/api/translations/${asset.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ translation: asset.translation }),
    })
      .then(res => res.json())
      .finally(() => {
        setIsLoading(false);
        setSelectedTextArea(undefined);
      });
  }

  function resetTranslation(asset: ITranslation) {
    const oldAsset = props.translation.translations.find(tr => tr.lang === asset.lang);

    if (!oldAsset) {
      return;
    }

    setAssets(prevAssets => ({
      ...prevAssets,
      [asset.lang]: {
        ...prevAssets[asset.lang],
        translation: oldAsset.translation,
      },
    }));
  }

  function didClickDropdownItem(e: string) {
    if (e === 'delete') {
      setMessageDialogType(EMessageDialogType.delete_translation_key);
      setIsMessageDialogOpen(true);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <MessageDialog
        open={isMessageDialogOpen}
        setOpen={setIsMessageDialogOpen}
        messageType={messageDialogType}
        didClickConfirm={() => {
          if (messageDialogType === EMessageDialogType.delete_translation_key) {
            fetch(`/api/translations/${props.translation.id}`, {
              method: 'DELETE',
            });
          } else if (messageDialogType === EMessageDialogType.discard_changes) {
            const entries = Object.entries(textRefs.current);
            const foundEntry = entries.find(([lang, textarea]) => textarea === selectedTextArea);
            const translation = props.translation.translations.find(tr => tr.lang === foundEntry?.[0]);

            if (translation) {
              resetTranslation(translation);
              selectedTextArea?.blur();
              setSelectedTextArea(undefined);
            }
          }
        }}
        didClickCancel={() => {
          if (messageDialogType === EMessageDialogType.discard_changes) {
            setSelectedTextArea(selectedTextArea);
          }
        }}
      />

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <input type="checkbox" defaultChecked={false} className="checkbox-primary checkbox checkbox-sm focus:ring-transparent" />
          <div className="cursor-pointer rounded-lg p-1 hover:bg-primary-content" onClick={() => toast.success('Key copied to clipboard!')}>
            <p className="break-all text-sm font-medium">{props.translation.key}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="tooltip tooltip-secondary flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 p-1 hover:bg-success/25"
            data-tip="Mark as verfied">
            <CheckIcon className="h-4 w-4 text-black" />
          </div>

          <Dropdown onDropdownClick={didClickDropdownItem}>
            <div className="flex cursor-pointer rounded-lg p-2 hover:bg-gray-200">
              <Cog8ToothIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </div>
          </Dropdown>
        </div>
      </div>

      <div
        className={classNames(
          props.isSelected ? 'border border-primary' : '',
          'flex w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-lg border-2 bg-base-100'
        )}>
        {props.translation.translations.map((asset: ITranslation, index) => (
          <div
            key={asset.id ? asset.id : asset.lang}
            className={classNames(index === props.translation.translations.length - 1 ? '' : 'border-b', 'flex flex-col p-4')}
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
                onBlur={e => {
                  const lang = props.translation.translations.find(tr => tr.lang === asset.lang);

                  if (
                    lang?.translation !== assets[asset.lang].translation &&
                    e.relatedTarget?.id !== 'discard' &&
                    e.relatedTarget?.id !== 'save'
                  ) {
                    selectTextArea(asset.lang);
                    setMessageDialogType(EMessageDialogType.discard_changes);
                    setIsMessageDialogOpen(true);
                  }
                }}
                onChange={e => {
                  setAssets(prevAssets => ({
                    ...prevAssets,
                    [asset.lang]: {
                      ...prevAssets[asset.lang],
                      translation: e.target.value,
                    },
                  }));
                }}
                value={assets[asset.lang]?.translation ?? ''}
                className="w-full resize-none border-none bg-transparent p-0 focus:ring-0"
              />
            </div>

            {selectedTextArea === textRefs.current[asset.lang] && props.isSelected ? (
              <div className="flex items-center justify-between">
                <div>
                  <button
                    id="discard"
                    className="btn btn-xs rounded-full bg-gray-100 normal-case"
                    onClick={e => {
                      e.stopPropagation();
                      selectedTextArea?.blur();
                      setSelectedTextArea(undefined);
                      resetTranslation(asset);
                    }}>
                    Discard
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex cursor-pointer rounded-lg p-1 hover:bg-gray-200">
                    <EllipsisHorizontalIcon className="h-4 w-4 text-black" aria-hidden="true" />
                  </div>

                  {assets[asset.lang]?.char_limit ? (
                    <p className="text-sm text-gray-400">{assets[asset.lang]?.translation.length}/32</p>
                  ) : (
                    <div className="flex cursor-pointer rounded-lg p-1 hover:bg-gray-200">
                      <ImTextColor />
                    </div>
                  )}
                  <button
                    id="save"
                    className="btn btn-primary btn-xs rounded-full normal-case"
                    onClick={e => updateTranslation(assets[asset.lang])}>
                    {isLoading ? <span className="loading loading-spinner loading-xs"></span> : 'Save'}
                  </button>
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
