import { useMemo, useState, useTransition } from 'react'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/lib/projects'

type Labels = {
  all: string
  empty: string
  results: string
  repo: string
}

type Props = {
  projects: ProjectItem[]
  tags: string[]
  labels: Labels
}

export function PortfolioFilter({ projects, tags, labels }: Props) {
  const [activeTag, setActiveTag] = useState<string>('all')
  const [isPending, startTransition] = useTransition()

  const filtered = useMemo(() => {
    if (activeTag === 'all') return projects
    return projects.filter((project) => project.tags.includes(activeTag))
  }, [activeTag, projects])

  function selectTag(tag: string) {
    startTransition(() => setActiveTag(tag))
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div
        className="flex flex-wrap items-center gap-2"
        role="toolbar"
        aria-label="Project filters"
      >
        <FilterChip
          active={activeTag === 'all'}
          onClick={() => selectTag('all')}
          label={labels.all}
        />
        {tags.map((tag) => (
          <FilterChip
            key={tag}
            active={activeTag === tag}
            onClick={() => selectTag(tag)}
            label={tag}
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {labels.results.replace('{count}', String(filtered.length))}
      </p>

      <div
        className={cn(
          'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
          isPending && 'opacity-60',
        )}
      >
        {filtered.length === 0 ? (
          <p className="col-span-full py-16 text-center text-muted-foreground">
            {labels.empty}
          </p>
        ) : (
          filtered.map((project) => (
            <ProjectFilterCard
              key={project.id}
              project={project}
              repoLabel={labels.repo}
            />
          ))
        )}
      </div>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-background text-foreground hover:border-primary/60 hover:text-primary',
      )}
    >
      {label}
    </button>
  )
}

function ProjectFilterCard({
  project,
  repoLabel,
}: {
  project: ProjectItem
  repoLabel: string
}) {
  const card = (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg transition duration-200 hover:border-primary">
      {project.imagePath ? (
        <img
          src={project.imagePath}
          alt={project.imageAlt}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-linear-to-br from-orange-500/20 via-background to-orange-700/10">
          <span className="text-3xl font-black tracking-tight text-primary/70">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div>
          <h3 className="text-lg font-medium">{project.name}</h3>
          {project.description ? (
            <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
          ) : null}
        </div>
        {project.tags.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.map((tag, index) => (
              <Badge
                key={`${project.id}-${tag}-${index}`}
                variant="secondary"
                className="font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
        {project.repository ? (
          <span className="text-xs text-muted-foreground underline-offset-2 group-hover:underline">
            {repoLabel}
          </span>
        ) : null}
      </div>
    </article>
  )

  if (project.website) {
    return (
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    )
  }

  return <div className="h-full">{card}</div>
}
