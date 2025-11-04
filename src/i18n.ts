import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

const translations: Record<string, Record<string, any>> = {
  en,
  es,
  pt,
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    const keys = key.split('.')
    let translation = translations[lang]
    for (const k of keys) {
      if (translation === undefined) {
        break
      }
      translation = translation[k]
    }
    return translation || key
  }
}
