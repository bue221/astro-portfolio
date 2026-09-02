import type { EntryFieldTypes } from 'contentful'
import { contentfulClient } from './contentful'
import { LOCAL_PROJECTS, getProjectCoverPath } from './project-catalog'

export type ProjectItem = {
  id: string
  name: string
  description: string
  website?: string
  repository?: string
  imagePath?: string
  imageAlt: string
  tags: string[]
}

export interface ContentfulProject {
  contentTypeId: 'Projects'
  fields: {
    name: EntryFieldTypes.Text
    description?: EntryFieldTypes.Text
    img?: EntryFieldTypes.AssetLink
    website?: EntryFieldTypes.Text
    repositorio?: EntryFieldTypes.Text
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    technologies?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    stack?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  }
}

/** Tag enrichment by project name when CMS tags are missing */
const TAGS_BY_NAME: Record<string, string[]> = {
  laponttes: ['Astro', 'Restaurant', 'Landing', 'Full Stack'],
  'shell sort': ['Algorithms', 'JavaScript'],
  'vue mapbox': ['Vue', 'Maps', 'Frontend'],
  'casa-fest': ['Frontend', 'Events'],
  'minecraft clone': ['Three.js', 'Game', 'Clone'],
  'game of life': ['Algorithms', 'Canvas', 'JavaScript'],
  'juego de la vida concat': ['Algorithms', 'Canvas', 'JavaScript'],
  'rave clud': ['React', 'Events', 'Frontend'],
  'empleados angular': ['Angular', 'CRUD'],
  'landing portfolio': ['Landing', 'HTML/CSS'],
  'angular images with ngrx': ['Angular', 'NgRx', 'State'],
  'landing page': ['Landing', 'Frontend'],
  'vue gym todolist': ['Vue', 'Productivity'],
  'crud nextjs mongodb': ['Next.js', 'MongoDB', 'Full Stack'],
  'prueba-gradiweb': ['Frontend', 'Challenge'],
  'linkedin clone': ['React', 'Clone', 'Social'],
  'covid-19': ['API', 'Data Viz', 'React'],
  'netflix clone': ['React', 'Clone', 'UI'],
  'triki game': ['Game', 'JavaScript'],
  'dog api': ['API', 'JavaScript'],
  'app prueba': ['Frontend'],
  'react-admin': ['React', 'Admin', 'Dashboard'],
  'portafolio con html,css y javascript': ['HTML/CSS', 'JavaScript'],
  'calculadora en javascript': ['JavaScript', 'UI'],
  'youtube clone': ['React', 'Clone', 'UI'],
  'react and firebase todo list app': ['React', 'Firebase', 'Full Stack'],
  portfolio: ['Astro', 'Frontend'],
  'intellectus my firts website': ['HTML/CSS', 'Landing'],
}

function withCover(project: ProjectItem): ProjectItem {
  return {
    ...project,
    imagePath: project.imagePath || getProjectCoverPath(project.name),
    imageAlt: project.imageAlt || `${project.name} cover`,
  }
}

function normalizeName(name: string) {
  return name.trim().toLowerCase()
}

function assetUrl(url?: string) {
  if (!url) return undefined
  return url.startsWith('//') ? `https:${url}` : url
}

function uniqueTags(tags: string[]) {
  return [...new Set(tags.map((tag) => tag.trim()).filter(Boolean))]
}

function resolveTags(name: string, cmsTags: string[] = []) {
  const fromName = TAGS_BY_NAME[normalizeName(name)] ?? []
  return uniqueTags([...cmsTags, ...fromName])
}

function unwrapLocalizedField<T>(value: T): unknown {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value

  const record = value as Record<string, unknown>
  if ('nodeType' in record || 'sys' in record || 'fields' in record) {
    return value
  }

  const keys = Object.keys(record)
  if (keys.length === 0) return value

  const looksLocalized = keys.every((key) => key.includes('-'))
  if (!looksLocalized) return value

  return record[keys[0]]
}

function richTextToPlain(value: unknown): string {
  if (!value || typeof value !== 'object') return ''

  const node = value as {
    nodeType?: string
    value?: string
    content?: unknown[]
  }
  if (node.nodeType === 'text' && typeof node.value === 'string') {
    return node.value
  }

  if (!Array.isArray(node.content)) return ''

  return node.content
    .map((child) => richTextToPlain(child))
    .filter(Boolean)
    .join(' ')
    .trim()
}

function toPlainText(value: unknown): string {
  const resolved = unwrapLocalizedField(value)

  if (resolved == null) return ''
  if (typeof resolved === 'string') return resolved.trim()
  if (typeof resolved === 'number' || typeof resolved === 'boolean') {
    return String(resolved)
  }

  if (Array.isArray(resolved)) {
    return resolved
      .map((item) => toPlainText(item))
      .filter(Boolean)
      .join(' ')
      .trim()
  }

  if (typeof resolved === 'object') {
    const record = resolved as Record<string, unknown>

    if (record.nodeType === 'document' || record.nodeType === 'paragraph') {
      return richTextToPlain(record)
    }

    if (typeof record.uri === 'string') return record.uri
    if (typeof record.url === 'string') return record.url

    if (record.fields && typeof record.fields === 'object') {
      const fields = record.fields as Record<string, unknown>
      if (typeof fields.uri === 'string') return fields.uri
      if (typeof fields.url === 'string') return fields.url
      if (typeof fields.file === 'object' && fields.file) {
        const file = fields.file as { url?: string }
        if (typeof file.url === 'string') return file.url
      }
    }
  }

  return ''
}

function toUrl(value: unknown): string | undefined {
  const text = toPlainText(value)
  if (!text) return undefined
  if (text.startsWith('http://') || text.startsWith('https://')) return text
  if (text.startsWith('//')) return `https:${text}`
  if (text.startsWith('/')) return text
  return `https://${text}`
}

function toStringArray(value: unknown): string[] {
  const resolved = unwrapLocalizedField(value)
  if (!resolved) return []
  if (Array.isArray(resolved)) {
    return resolved.flatMap((item) => toStringArray(item))
  }
  const text = toPlainText(resolved)
  return text ? [text] : []
}

function mapContentfulEntry(entry: any): ProjectItem | null {
  const rawName = unwrapLocalizedField(entry?.fields?.name)
  const name = toPlainText(rawName)
  if (!name) return null

  const cmsTags = [
    ...toStringArray(entry?.fields?.tags),
    ...toStringArray(entry?.fields?.technologies),
    ...toStringArray(entry?.fields?.stack),
  ]

  const imageFields = unwrapLocalizedField(entry?.fields?.img) as
    | { fields?: { file?: { url?: string }; title?: string } }
    | undefined

  return {
    id: entry?.sys?.id ?? normalizeName(name),
    name,
    description: toPlainText(unwrapLocalizedField(entry?.fields?.description)),
    website: toUrl(entry?.fields?.website),
    repository: toUrl(entry?.fields?.repositorio),
    imagePath: assetUrl(imageFields?.fields?.file?.url),
    imageAlt: imageFields?.fields?.title || name,
    tags: resolveTags(name, cmsTags),
  }
}

export async function getProjects(): Promise<ProjectItem[]> {
  if (!contentfulClient) {
    return LOCAL_PROJECTS
  }

  try {
    const entries = await contentfulClient.getEntries<ContentfulProject>({})
    const projects = entries.items
      .map(mapContentfulEntry)
      .filter((project): project is ProjectItem => Boolean(project))
      .map(withCover)

    return projects.length > 0 ? projects : LOCAL_PROJECTS
  } catch (error) {
    console.error('Error fetching Contentful projects:', error)
    return LOCAL_PROJECTS
  }
}

export function collectProjectTags(projects: ProjectItem[]) {
  return uniqueTags(projects.flatMap((project) => project.tags)).sort((a, b) =>
    a.localeCompare(b),
  )
}
