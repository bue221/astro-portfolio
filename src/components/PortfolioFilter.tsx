import { useMemo, useState, useTransition } from 'react'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import type { ProjectItem } from '@/lib/projects'

type Labels = {
  all: string
  empty: string
  results: string
  repo: string
  live: string
  repository: string
  noLinks: string
  backToAll: string
}

type Meta = {
  lang: string
  portfolioPath: string
}

type Props = {
  projects: ProjectItem[]
  tags: string[]
  labels: Labels
  meta: Meta
}

export function PortfolioFilter({ projects, tags, labels, meta }: Props) {
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
      {/* Mobile: native select */}
      <div className="sm:hidden">
        <label
          htmlFor="tag-select"
          className="text-muted-foreground mb-1.5 block text-xs font-medium tracking-wider uppercase"
        >
          {labels.all}
        </label>
        <select
          id="tag-select"
          value={activeTag}
          onChange={(e) => selectTag(e.target.value)}
          className="bg-background border-border text-foreground focus:ring-primary w-full rounded-xl border px-3 py-2.5 text-sm font-medium shadow-sm focus:ring-2 focus:outline-none"
        >
          <option value="all">{labels.all}</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: scrollable chip row */}
      <div
        className="hidden sm:flex"
        role="toolbar"
        aria-label="Project filters"
      >
        <div className="scrollbar-hide flex flex-wrap gap-2">
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
      </div>

      <p className="text-muted-foreground text-sm" aria-live="polite">
        {labels.results.replace('{count}', String(filtered.length))}
      </p>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isPending ? (
          Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)
        ) : filtered.length === 0 ? (
          <p className="text-muted-foreground col-span-full py-16 text-center">
            {labels.empty}
          </p>
        ) : (
          filtered.map((project) => (
            <ProjectFilterCard
              key={project.id}
              project={project}
              repoLabel={labels.repo}
              detailHref={`${meta.portfolioPath}/${project.id}`}
            />
          ))
        )}
      </div>
    </div>
  )
}

function ProjectSkeleton() {
  return (
    <div
      className="bg-card flex h-full flex-col overflow-hidden rounded-2xl border shadow-lg"
      aria-hidden="true"
    >
      <div className="bg-muted h-48 w-full animate-pulse" />
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div className="flex flex-col gap-2">
          <div className="bg-muted h-5 w-3/5 animate-pulse rounded-md" />
          <div className="bg-muted h-3.5 w-full animate-pulse rounded-md" />
          <div className="bg-muted h-3.5 w-4/5 animate-pulse rounded-md" />
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-muted h-5 w-14 animate-pulse rounded-full"
            />
          ))}
        </div>
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
  detailHref,
}: {
  project: ProjectItem
  repoLabel: string
  detailHref: string
}) {
  return (
    <a href={detailHref} className="block h-full" aria-label={project.name}>
      <article className="group bg-card text-card-foreground hover:border-primary flex h-full flex-col overflow-hidden rounded-2xl border shadow-lg transition duration-200">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={project.imageAlt}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            width="400"
            height="192"
          />
        ) : (
          <div className="via-background flex h-48 w-full items-center justify-center bg-linear-to-br from-orange-500/20 to-orange-700/10">
            <span className="text-primary/70 text-3xl font-black tracking-tight">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 px-5 py-4">
          <div>
            <h3 className="text-lg font-medium">{project.name}</h3>
            {project.description ? (
              <p className="text-muted-foreground mt-0.5 line-clamp-2 text-sm">
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
            <span className="text-muted-foreground text-xs underline-offset-2 group-hover:underline">
              {repoLabel}
            </span>
          ) : null}
        </div>
      </article>
    </a>
  )
}
