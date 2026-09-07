import type { ProjectItem } from './projects'

export function slugifyProject(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getProjectCoverPath(name: string) {
  return `/projects/${slugifyProject(name)}.svg`
}

function httpsUrl(url?: string) {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
}

type CatalogEntry = Omit<ProjectItem, 'id' | 'imagePath' | 'imageAlt'> & {
  id?: string
}

const RAW_PROJECTS: CatalogEntry[] = [
  {
    id: 'scanline-master',
    name: 'ScanLine Master',
    description:
      'Educational SPA that teaches polygon scan-line fill with a step-by-step simulator, free-draw lab and KaTeX fundamentals.',
    website: 'https://scanline-master.vercel.app',
    repository: 'https://github.com/bue221/scanline-master',
    tags: ['React', 'TypeScript', 'Canvas', 'Algorithms'],
  },
  {
    id: 'wardrobe-app',
    name: 'Wardrobe',
    description:
      'Mobile-first PWA for a local wardrobe and outfits on-device, with IndexedDB storage and optional on-device AI via WebLLM.',
    website: 'https://wardrobe-app-woad.vercel.app',
    repository: 'https://github.com/bue221/wardrobe-app',
    tags: ['React', 'TypeScript', 'PWA'],
  },
  {
    id: 'swarm-chatbot-real-state',
    name: 'Swarm Chatbot Real Estate',
    description:
      'OpenAI Swarm multi-agent chatbot for Spot2 real-estate advising: triage, profiling, FAQs, cancellations and visit scheduling.',
    repository: 'https://github.com/bue221/swarm-chatbot-real-state',
    tags: ['Python', 'AI', 'OpenAI'],
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description:
      'Local-first Next.js app that generates customizable QR codes in the browser, with logo, colors and PNG/SVG download.',
    website: 'https://qr-code-generator.bue221.xyz/',
    repository: 'https://github.com/bue221/qr-code-generator',
    tags: ['Next.js', 'TypeScript', 'React'],
  },
  {
    id: 'redsensurb',
    name: 'RedSensUrb',
    description:
      'Distributed urban-sensor MVP: Java nodes send UDP telemetry to a Spring coordinator with REST, SQLite and 2PC replicas, plus a React client.',
    repository: 'https://github.com/bue221/RedSensUrb',
    tags: ['Java', 'React', 'Full Stack'],
  },
  {
    id: 'videojuego-universidad',
    name: 'Corre corre que te atrapo',
    description:
      'Unity 3D prototype where collecting stars increases brightness and makes the pursuer detect you from farther away.',
    website:
      'https://play.unity.com/en/games/d99eb09f-b519-46aa-9cdb-ced91cf7afb0/corre-corre-que-te-atrapo',
    repository: 'https://github.com/bue221/videojuego_universidad',
    tags: ['Unity', 'Game', 'C#'],
  },
  {
    id: 'obtener-antecedentes-policia',
    name: 'Antecedentes Policía',
    description:
      'Python/Selenium automation that queries Colombia Police judicial records and exports the certificate as PDF.',
    repository: 'https://github.com/bue221/obtener-antecedentes-policia',
    tags: ['Python', 'Selenium', 'Automation'],
  },
  {
    id: 'laponttes',
    name: 'Laponttes',
    description:
      'Restaurant website with menu, store and visit-first experience for Laponttes.',
    website: 'https://www.laponttes.com/',
    tags: ['Astro', 'Restaurant', 'Landing', 'Full Stack'],
  },
  {
    id: 'coway-game',
    name: 'Coway Game',
    description:
      'Browser game built with Astro, exploring interaction, animation and game loops.',
    website: 'https://cowaygame-bue221-portfolio.vercel.app/',
    repository: 'https://github.com/bue221/astro-coway-game',
    tags: ['Astro', 'Game', 'Frontend'],
  },
  {
    id: 'shell-sort',
    name: 'Shell sort',
    description: 'Sorting algorithm visualizer built with JavaScript.',
    website: 'https://shellsort.netlify.app/',
    repository: 'https://github.com/bue221/algortimo-shell',
    tags: ['Algorithms', 'JavaScript'],
  },
  {
    id: 'casa-fest',
    name: 'casa-fest',
    description: 'Event landing and frontend experience for Casa Fest.',
    website: 'https://casa-fest-clone.netlify.app/',
    repository: 'https://github.com/bue221/Prueba-indio-guru',
    tags: ['Frontend', 'Events'],
  },
  {
    id: 'minecraft-clone',
    name: 'Minecraft clone',
    description: 'Voxel-style game clone exploring 3D rendering basics.',
    website: 'https://minecraft-clone-three.netlify.app/',
    repository: 'https://github.com/bue221/minecraft-clone',
    tags: ['Three.js', 'Game', 'Clone'],
  },
  {
    id: 'crud-nextjs-mongodb',
    name: 'Crud nextjs mongodb',
    description: 'Full-stack CRUD app with Next.js and MongoDB.',
    website: 'https://crudnote-git-main-bue221.vercel.app',
    repository: 'https://github.com/bue221/note-nextjs',
    tags: ['Next.js', 'MongoDB', 'Full Stack'],
  },
  {
    id: 'netflix-clone',
    name: 'Netflix clone',
    description:
      'UI clone focused on layout, media cards and browsing patterns.',
    website: 'https://bue221.github.io/netflix-clone/index.html',
    repository: 'https://github.com/bue221/netflix-clone',
    tags: ['React', 'Clone', 'UI'],
  },
  {
    id: 'triki-game',
    name: 'Triki game',
    description: 'Tic-tac-toe game built with vanilla JavaScript.',
    website: 'https://bue221.github.io/triki/index.html',
    repository: 'https://github.com/bue221/triki',
    tags: ['Game', 'JavaScript'],
  },
  {
    id: 'dog-api',
    name: 'Dog api',
    description: 'Dog image browser powered by a public REST API.',
    website: 'https://bue221.github.io/Dog-api/index.html',
    repository: 'https://github.com/bue221/Dog-api',
    tags: ['API', 'JavaScript'],
  },
  {
    id: 'intellectus',
    name: 'Intellectus my firts website',
    description: 'First personal website — Intellectus landing page.',
    website: 'https://bue221.github.io/--Intellectus--/',
    repository: 'https://github.com/bue221/--Intellectus--',
    tags: ['HTML/CSS', 'Landing'],
  },
]

export const LOCAL_PROJECTS: ProjectItem[] = RAW_PROJECTS.map((project) => ({
  ...project,
  id: project.id ?? slugifyProject(project.name),
  website: httpsUrl(project.website),
  repository: httpsUrl(project.repository),
  imagePath: getProjectCoverPath(project.name),
  imageAlt: `${project.name} cover`,
}))
