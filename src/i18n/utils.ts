import {
  ui,
  defaultLang,
  showDefaultLang,
  routes,
  type TranslationKey,
} from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: TranslationKey): string {
    return (
      (ui[lang][key] as string | undefined) || (ui[defaultLang][key] as string)
    )
  }
}

export type { TranslationKey }

function localeRoutes(lang: string) {
  return routes[lang as keyof typeof routes]
}

function translateFirstSegment(segment: string, lang: string) {
  const table = localeRoutes(lang)
  if (lang !== defaultLang && table?.[segment]) {
    return table[segment]
  }
  return segment
}

function canonicalFirstSegment(segment: string, lang: keyof typeof ui) {
  const table = localeRoutes(lang)
  if (lang !== defaultLang && table) {
    const key = Object.keys(table).find(
      (routeKey) => table[routeKey] === segment,
    )
    if (key) return key
  }
  return segment
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const segments = path.split('/').filter(Boolean)

    if (segments.length === 0) {
      return !showDefaultLang && l === defaultLang ? '/' : `/${l}/`
    }

    const translatedPath = `/${[
      translateFirstSegment(segments[0], l),
      ...segments.slice(1),
    ].join('/')}`

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
      if (!task || task === taskKey) break // No more tasks
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
  const parts = pathname.split('/').filter(Boolean)
  const currentLang = getLangFromUrl(url)

  if (parts.length === 0 || (parts.length === 1 && parts[0] === currentLang)) {
    return ''
  }

  const pathParts = parts[0] === currentLang ? parts.slice(1) : parts
  if (pathParts.length === 0) {
    return ''
  }

  return [
    canonicalFirstSegment(pathParts[0], currentLang),
    ...pathParts.slice(1),
  ].join('/')
}
