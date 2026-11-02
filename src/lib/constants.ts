import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/bue221',
  linkedin: 'https://www.linkedin.com/in/bue221/',
  mail: 'mailto:camiloplaza3@gmail.com',
  instagram: 'https://www.instagram.com/caj_ink/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Andrés Plaza | Bue221',
  DESCRIPTION:
    'Full Stack + AI developer from Colombia — React/Next.js, Python, Go, and AI agent platforms.',
  AUTHOR: 'Andrés Camilo Plaza',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Systems Engineering',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2020 - 2027',
  },
  {
    title: 'Continuous learning',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: 'Ongoing',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    id: 'mercadolibre',
    start: '2025',
    link: 'https://www.mercadolibre.com.co/',
    end: 'Current',
  },
  {
    id: 'straico',
    start: '2025',
    link: 'https://straico.com/',
    end: '2025',
  },
  {
    id: 'spot2',
    start: '2022',
    link: 'https://spot2.mx/',
    end: '2025',
  },
  {
    id: 'imaginamos',
    start: '2021',
    link: 'https://imaginamos.com/',
    end: '2022',
  },
  {
    id: 'inetum',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
  },
  {
    id: 'sig',
    start: '2021',
    end: '2021',
  },
  {
    id: 'bookii',
    start: '2019',
    end: '2021',
  },
]
