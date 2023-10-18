export type ITranslationAsset = {
  key: string;
  languages: ITranslation[];
};

export type ITranslation = {
  lang: string;
  is_base: boolean;
  value: string;
};

export const translations: ITranslationAsset[] = [
  {
    key: 'dashboard.onboarding.done',
    languages: [
      {
        lang: 'da',
        value: 'Før du spørger, er svaret ja',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Before you ask, the answer is yes',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.translate',
    languages: [
      {
        lang: 'da',
        value: 'Oversæt',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Translate',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.why',
    languages: [
      {
        lang: 'da',
        value: 'Hvorfor',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Why',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.you-are-here',
    languages: [
      {
        lang: 'da',
        value: 'Du er her',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'You are here',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.what-did-i-say',
    languages: [
      {
        lang: 'da',
        value: 'Glem hvad jeg sagde',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Forget what i said',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.bluetooth',
    languages: [
      {
        lang: 'da',
        value: 'Bluetooth skal være tændt for at du kan bruge',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Bluetooth needs to be turned in order to use',
        is_base: false,
      },
    ],
  },
  {
    key: 'dashboard.onboarding.processing',
    languages: [
      {
        lang: 'da',
        value: 'Processærer betaling',
        is_base: true,
      },
      {
        lang: 'en',
        value: 'Processing payment',
        is_base: false,
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
        is_base: true,
      },
      {
        lang: 'en',
        value:
          'our subscription has been cancelled. You will be able to use the remaining starts until the machine is done or something like that, i dont really know but i want to type a long string for gigs and shiggles',
        is_base: false,
      },
    ],
  },
];
