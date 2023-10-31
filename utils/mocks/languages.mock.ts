type Language = {
  code: string;
  name: string;
  img: string;
  emoji: string;
  base?: string;
};

export class LanguagesMock {
  public languages: Language[] = [
    {
      code: 'da',
      name: 'Danish',
      emoji: '🇩🇰',
      img: '',
    },
    {
      code: 'en',
      name: 'English',
      emoji: '🇺🇸',
      img: '',
    },
    {
      code: 'no',
      name: 'Norwegian',
      emoji: '🇳🇴',
      img: '',
    },
  ];
}
