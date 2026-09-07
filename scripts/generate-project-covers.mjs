import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/projects')

const projects = [
  'ScanLine Master',
  'QR Code Generator',
  'RedSensUrb',
  'Corre corre que te atrapo',
  'Antecedentes Policía',
  'Laponttes',
  'Coway Game',
  'Shell sort',
  'casa-fest',
  'Minecraft clone',
  'Rave Clud',
  'empleados angular',
  'Landing Portfolio',
  'Landing Page',
  'Vue Gym todolist',
  'Juego de la vida concat',
  'Crud nextjs mongodb',
  'prueba-gradiweb',
  'Netflix clone',
  'Triki game',
  'Dog api',
  'React-admin',
  'Portafolio con html,css y javascript',
  'Calculadora en javascript',
  'React and firebase todo list app',
  'Portfolio',
  'Intellectus my firts website',
]

const palettes = [
  ['#17120F', '#EA580C', '#FB923C'],
  ['#0f172a', '#6366f1', '#a5b4fc'],
  ['#052e16', '#16a34a', '#86efac'],
  ['#1e1b4b', '#7c3aed', '#c4b5fd'],
  ['#431407', '#c2410c', '#fdba74'],
  ['#042f2e', '#0d9488', '#5eead4'],
  ['#3f1d0f', '#d97706', '#fcd34d'],
  ['#1f2937', '#2563eb', '#93c5fd'],
]

const icons = ['cross', 'circle', 'diamond', 'grid', 'wave', 'bars']

function slugify(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function hash(name) {
  let value = 0
  for (let i = 0; i < name.length; i++) {
    value = (value * 31 + name.charCodeAt(i)) >>> 0
  }
  return value
}

function initials(name) {
  const words = name
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0] ?? ''}${words[1][0] ?? ''}`.toUpperCase()
}

function iconMarkup(type, accent, x, y, size, opacity) {
  const s = size
  if (type === 'circle') {
    return `<circle cx="${x}" cy="${y}" r="${s}" fill="${accent}" opacity="${opacity}" />`
  }
  if (type === 'diamond') {
    return `<polygon points="${x},${y - s} ${x + s},${y} ${x},${y + s} ${x - s},${y}" fill="${accent}" opacity="${opacity}" />`
  }
  if (type === 'grid') {
    return `<rect x="${x - s}" y="${y - s}" width="${s * 2}" height="${s * 2}" fill="none" stroke="${accent}" stroke-width="3" opacity="${opacity}" /><line x1="${x - s}" y1="${y}" x2="${x + s}" y2="${y}" stroke="${accent}" stroke-width="2" opacity="${opacity}" /><line x1="${x}" y1="${y - s}" x2="${x}" y2="${y + s}" stroke="${accent}" stroke-width="2" opacity="${opacity}" />`
  }
  if (type === 'wave') {
    return `<path d="M ${x - s} ${y} Q ${x - s / 2} ${y - s} ${x} ${y} T ${x + s} ${y}" fill="none" stroke="${accent}" stroke-width="4" opacity="${opacity}" />`
  }
  if (type === 'bars') {
    return `<rect x="${x - s}" y="${y - s / 2}" width="5" height="${s}" fill="${accent}" opacity="${opacity}" /><rect x="${x - s / 3}" y="${y - s}" width="5" height="${s * 1.4}" fill="${accent}" opacity="${opacity * 0.8}" /><rect x="${x + s / 4}" y="${y - s / 3}" width="5" height="${s * 1.1}" fill="${accent}" opacity="${opacity * 0.9}" />`
  }
  return `<rect x="${x - 2}" y="${y - s}" width="4" height="${s * 2}" fill="${accent}" opacity="${opacity}" /><rect x="${x - s}" y="${y - 2}" width="${s * 2}" height="4" fill="${accent}" opacity="${opacity}" />`
}

function buildSvg(name) {
  const h = hash(name)
  const [bg1, bg2, accent] = palettes[h % palettes.length]
  const icon = icons[(h >> 3) % icons.length]
  const label = initials(name)
  const decor = Array.from({ length: 8 }, (_, i) => {
    const px = 80 + ((h + i * 97) % 640)
    const py = 60 + ((h + i * 53) % 280)
    const size = 8 + ((h + i * 17) % 18)
    const opacity = 0.12 + ((h + i * 11) % 20) / 100
    const type = icons[(h + i) % icons.length]
    return iconMarkup(type, accent, px, py, size, opacity)
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" role="img" aria-label="${name}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#bg)" />
  ${decor}
  <circle cx="680" cy="90" r="120" fill="${accent}" opacity="0.12" />
  <circle cx="120" cy="360" r="90" fill="${accent}" opacity="0.08" />
  <g filter="url(#glow)">
    <text x="56" y="250" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="88" font-weight="900" letter-spacing="-4">${label}</text>
  </g>
  <text x="56" y="310" fill="${accent}" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700">${name.slice(0, 42)}</text>
  <g opacity="0.9">${iconMarkup(icon, accent, 700, 360, 28, 0.85)}</g>
</svg>
`
}

mkdirSync(outDir, { recursive: true })

const force = process.argv.includes('--force')
let generated = 0
let skipped = 0

for (const name of projects) {
  const slug = slugify(name)
  const dest = join(outDir, `${slug}.svg`)

  if (!force && existsSync(dest)) {
    skipped += 1
    continue
  }

  writeFileSync(dest, buildSvg(name), 'utf8')
  generated += 1
  console.log(`generated ${slug}.svg`)
}

console.log(
  `Done: ${generated} generated, ${skipped} skipped (${projects.length} covers in public/projects/)`,
)
