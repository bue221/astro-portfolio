import { ui, defaultLang, showDefaultLang, routes } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '')
    const hasTranslation =
      defaultLang !== l &&
      routes &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined
    const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`
  }
}

export function useTranslatedExperience(lang: keyof typeof ui) {
  return function getExperience(expId: string) {
    const t = useTranslations(lang)
    const experienceKeys = [
      'mercadolibre',
      'straico',
      'spot2',
      'imaginamos',
      'inetum',
      'sig',
      'bookii',
    ] as const

    if (!experienceKeys.includes(expId as any)) {
      return null
    }

    // Get all tasks for this experience
    const tasks: string[] = []
    let taskIndex = 0
    const maxTasks = 10 // Safety limit to prevent infinite loops
    while (taskIndex < maxTasks) {
      const taskKey =
        `experience.${expId}.tasks.${taskIndex}` as keyof (typeof ui)[typeof defaultLang]
      const task = t(taskKey)
      if (task === taskKey) break // No more tasks
      tasks.push(task)
      taskIndex++
    }

    return {
      company: t(
        `experience.${expId}.company` as keyof (typeof ui)[typeof defaultLang],
      ),
      position: t(
        `experience.${expId}.position` as keyof (typeof ui)[typeof defaultLang],
      ),
      location: t(
        `experience.${expId}.location` as keyof (typeof ui)[typeof defaultLang],
      ),
      tasks,
      current: t('experience.current' as keyof (typeof ui)[typeof defaultLang]),
    }
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname
  const parts = pathname?.split('/').filter(Boolean)
  const currentLang = getLangFromUrl(url)

  // If we're on the home page, return empty string
  if (parts.length === 0 || (parts.length === 1 && parts[0] === currentLang)) {
    return ''
  }

  // Remove the language prefix if present
  const pathParts = parts[0] === currentLang ? parts.slice(1) : parts
  const path = pathParts[pathParts.length - 1]

  if (!path || path === '') {
    return ''
  }

  // If we're on default lang, check if path has a translation
  if (defaultLang === currentLang && routes) {
    const route = Object.values(routes)[0]
    if (route && route[path] !== undefined) {
      return path
    }
    return path
  }

  // If we're on a translated lang, check if path is a translated route
  if (routes && routes[currentLang]) {
    const getKeyByValue = (
      obj: Record<string, string>,
      value: string,
    ): string | undefined => {
      return Object.keys(obj).find((key) => obj[key] === value)
    }

    const reversedKey = getKeyByValue(routes[currentLang], path)
    if (reversedKey !== undefined) {
      return reversedKey
    }
  }

  return path
}
