export type ITranslationAsset = {
  key: string;
  languages: ITranslation[];
};

export type ITranslation = {
  lang: string;
  value: string;
  verified: boolean;
  char_limit?: number;
};

export const translations: ITranslationAsset[] = [
  {
    key: 'dashboard.onboarding.done',
    languages: [
      {
        lang: 'da',
        value: 'Før du spørger, er svaret ja',
        char_limit: 32,
        verified: false,
      },
      {
        lang: 'en',
        value: 'Before you ask, the answer is yes',
        verified: false,
      },
      {
        lang: 'no',
        value: 'Before you ask, the answer is yes',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.translate',
    languages: [
      {
        lang: 'da',
        value: 'Oversæt',
        verified: false,
      },
      {
        lang: 'en',
        value: 'Translate',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.why',
    languages: [
      {
        lang: 'da',
        value: 'Hvorfor',
        verified: false,
      },
      {
        lang: 'en',
        value: 'Why',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.you-are-here',
    languages: [
      {
        lang: 'da',
        value: 'Du er her',
        verified: false,
      },
      {
        lang: 'en',
        value: 'You are here',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.what-did-i-say',
    languages: [
      {
        lang: 'da',
        value: 'Glem hvad jeg sagde',
        verified: false,
      },
      {
        lang: 'en',
        value: 'Forget what i said',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.bluetooth',
    languages: [
      {
        lang: 'da',
        value: 'Bluetooth skal være tændt for at du kan bruge',
        verified: false,
      },
      {
        lang: 'en',
        value: 'Bluetooth needs to be turned in order to use',
        verified: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.processing',
    languages: [
      {
        lang: 'da',
        value: 'Processærer betaling',
        verified: false,
      },
      {
        lang: 'en',
        value: 'Processing payment',
        verified: false,
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
        verified: false,
      },
      {
        lang: 'en',
        value:
          'our subscription has been cancelled. You will be able to use the remaining starts until the machine is done or something like that, i dont really know but i want to type a long string for gigs and shiggles',
        verified: false,
      },
    ],
  },
];
