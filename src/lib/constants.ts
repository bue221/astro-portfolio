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
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
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
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
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
    start: '2021',
    link: 'https://straico.com/',
    end: 'Current',
  },
  {
    id: 'spot2',
    start: '2021',
    link: 'https://spot2.mx/',
    end: '2025',
  },
  {
    id: 'imaginamos',
    start: '2021',
    link: 'https://imaginamos.com/',
    end: '2021',
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
