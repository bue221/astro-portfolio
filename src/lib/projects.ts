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

function uniqueTags(tags: string[]) {
  return [...new Set(tags.map((tag) => tag.trim()).filter(Boolean))]
}

export async function getProjects(): Promise<ProjectItem[]> {
  return LOCAL_PROJECTS
}

export async function getProjectStaticPaths() {
  const projects = await getProjects()
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }))
}

export function collectProjectTags(projects: ProjectItem[]) {
  return uniqueTags(projects.flatMap((project) => project.tags)).sort((a, b) =>
    a.localeCompare(b),
  )
}
