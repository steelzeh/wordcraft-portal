export type ITranslationAsset = {
  key: string;
  languages: ITranslation[];
};

export type ITranslation = {
  lang: string;
  value: string;
};

export const translations: ITranslationAsset[] = [
  {
    key: 'dashboard.onboarding.done',
    languages: [
      {
        lang: 'da',
        value: 'Før du spørger, er svaret ja',
      },
      {
        lang: 'en',
        value: 'Before you ask, the answer is yes',
      },
      {
        lang: 'no',
        value: 'Before you ask, the answer is yes',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.translate',
    languages: [
      {
        lang: 'da',
        value: 'Oversæt',
      },
      {
        lang: 'en',
        value: 'Translate',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.why',
    languages: [
      {
        lang: 'da',
        value: 'Hvorfor',
      },
      {
        lang: 'en',
        value: 'Why',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.you-are-here',
    languages: [
      {
        lang: 'da',
        value: 'Du er her',
      },
      {
        lang: 'en',
        value: 'You are here',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.what-did-i-say',
    languages: [
      {
        lang: 'da',
        value: 'Glem hvad jeg sagde',
      },
      {
        lang: 'en',
        value: 'Forget what i said',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.bluetooth',
    languages: [
      {
        lang: 'da',
        value: 'Bluetooth skal være tændt for at du kan bruge',
      },
      {
        lang: 'en',
        value: 'Bluetooth needs to be turned in order to use',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.processing',
    languages: [
      {
        lang: 'da',
        value: 'Processærer betaling',
      },
      {
        lang: 'en',
        value: 'Processing payment',
      },
    ],
  },
  {
    key: 'dashboard.onboarding.subscription',
    languages: [
      {
        lang: 'da',
        value:
          'vores abonnement er blevet annulleret. Du vil være i stand til at bruge de resterende starter, indtil maskinen er færdig eller noget i den stil, jeg ved det ikke rigtigt, men jeg vil gerne skrive en lang streng til koncerter og sjask',
      },
      {
        lang: 'en',
        value:
          'our subscription has been cancelled. You will be able to use the remaining starts until the machine is done or something like that, i dont really know but i want to type a long string for gigs and shiggles',
      },
    ],
  },
];
