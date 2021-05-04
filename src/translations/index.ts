import de from './de.json';
import en from './en.json';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  de,
  en,
};
