export type ITranslationAsset = {
  id: string;
  key: string;
  translations: ITranslation[];
};

export type ITranslation = {
  id: string;
  lang: string;
  lang_id: string;
  translation: string;
  verified: boolean;
  char_limit?: number;
};
