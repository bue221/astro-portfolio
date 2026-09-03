import type { APIRoute } from 'astro'

interface GitHubRepo {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
}

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

/**
 * GET /api/github-stats
 * Returns the latest non-forked repo and total public repos for bue221.
 * Cached on the edge for 1 hour to avoid GitHub rate limits.
 */
export const GET: APIRoute = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/users/bue221/repos?sort=updated&per_page=20&type=public',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'bue221-portfolio',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter out forks and pick the most recently updated original repo
    const ownRepos = repos.filter((r) => !r.fork)
    const latest = ownRepos[0] ?? null

    const statsResponse = await fetch('https://api.github.com/users/bue221', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'bue221-portfolio',
      },
    })

    let publicRepos = 0
    if (statsResponse.ok) {
      const userData = await statsResponse.json()
      publicRepos = userData.public_repos ?? 0
    }

    const data: GitHubStats = {
      lastRepo: latest
        ? {
            name: latest.name,
            url: latest.html_url,
            language: latest.language,
            stars: latest.stargazers_count,
            updatedAt: latest.updated_at,
          }
        : null,
      publicRepos,
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache for 1 hour in CDN / browser
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Unknown error'
    console.error('[github-stats] Failed to fetch:', error)

    const fallback: GitHubStats = {
      lastRepo: null,
      publicRepos: 0,
      error,
    }

    return new Response(JSON.stringify(fallback), {
      status: 200, // Return 200 so the client can degrade gracefully
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
