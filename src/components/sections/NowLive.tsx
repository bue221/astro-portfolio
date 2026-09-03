import { useEffect, useState } from 'react'

interface GitHubStats {
  lastRepo: {
    name: string
    url: string
    language: string | null
    stars: number
    updatedAt: string
  } | null
  publicRepos: number
  error?: string
}

/** Language → color dot mapping (subset of popular ones) */
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Astro: '#ff5a03',
  Vue: '#41b883',
  Svelte: '#ff3e00',
}

function timeAgo(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime()
  const days = Math.floor(diff / 86_400_000)
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  return `${Math.floor(days / 30)}mo ago`
}

export function NowLive({ nowLabel, role }: { nowLabel: string; role: string }) {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // AbortController to cancel if component unmounts
    const controller = new AbortController()

    fetch('/api/github-stats', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: GitHubStats) => {
        setStats(data)
        setLoading(false)
      })
      .catch((err) => {
        // Ignore abort errors (component unmounted)
        if (err.name !== 'AbortError') {
          console.warn('[NowLive] Failed to load GitHub stats:', err)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="mt-3 flex flex-col gap-2">
      <p className="text-xs">{role}</p>

      {/* GitHub stats section */}
      <div className="border-border mt-1 rounded-xl border px-3 py-2.5 text-xs">
        {loading ? (
          <div className="flex flex-col gap-1.5">
            <div className="bg-muted h-3 w-3/4 animate-pulse rounded" />
            <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
          </div>
        ) : stats?.lastRepo ? (
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-[10px] uppercase tracking-wider">
              Latest push
            </span>
            <a
              href={stats.lastRepo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary truncate font-medium transition-colors"
            >
              {stats.lastRepo.name}
            </a>
            <div className="text-muted-foreground flex items-center gap-2">
              {stats.lastRepo.language && (
                <span className="flex items-center gap-1">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        LANG_COLORS[stats.lastRepo.language] ?? '#8b949e',
                    }}
                  />
                  {stats.lastRepo.language}
                </span>
              )}
              <span>·</span>
              <span>{timeAgo(stats.lastRepo.updatedAt)}</span>
              {stats.lastRepo.stars > 0 && (
                <>
                  <span>·</span>
                  <span>⭐ {stats.lastRepo.stars}</span>
                </>
              )}
            </div>
          </div>
        ) : (
          <span className="text-muted-foreground">github.com/bue221</span>
        )}
      </div>
    </div>
  )
}
