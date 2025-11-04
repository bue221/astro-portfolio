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
    company: 'experience.mercadoLibre.company',
    location: 'Buenos Aires, Argentina',
    position: 'experience.mercadoLibre.position',
    start: '2025',
    link: 'https://mercadolibre.com/',
    end: 'Current',
    tasks: [
      'experience.mercadoLibre.tasks.0',
      'experience.mercadoLibre.tasks.1',
      'experience.mercadoLibre.tasks.2',
    ],
  },
  {
    company: 'experience.straico.company',
    location: 'Bogotá D C, Colombia',
    position: 'experience.straico.position',
    start: '2021',
    link: 'https://straico.com/',
    end: '2025',
    tasks: ['experience.straico.tasks.0', 'experience.straico.tasks.1'],
  },
  {
    company: 'experience.spot2.company',
    location: 'Mexico City, Mexico',
    position: 'experience.spot2.position',
    link: 'https://spot2.mx/',
    start: '2021',
    end: '2025',
    tasks: [
      'experience.spot2.tasks.0',
      'experience.spot2.tasks.1',
      'experience.spot2.tasks.2',
      'experience.spot2.tasks.3',
    ],
  },
  {
    company: 'experience.imaginamos.company',
    link: 'https://imaginamos.com/',
    location: 'Bogotá D C, Colombia',
    position: 'experience.imaginamos.position',
    start: '2021',
    end: '2021',
    tasks: ['experience.imaginamos.tasks.0', 'experience.imaginamos.tasks.1'],
  },
  {
    company: 'experience.inetum.company',
    location: 'Bogotá D C, Colombia',
    position: 'experience.inetum.position',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
    tasks: [
      'experience.inetum.tasks.0',
      'experience.inetum.tasks.1',
      'experience.inetum.tasks.2',
      'experience.inetum.tasks.3',
    ],
  },
  {
    company: 'experience.sig.company',
    location: 'Bogotá D C, Colombia',
    position: 'experience.sig.position',
    start: '2021',
    end: '2021',
    tasks: ['experience.sig.tasks.0'],
  },
  {
    company: 'experience.bookii.company',
    location: 'Bogotá D C, Colombia',
    position: 'experience.bookii.position',
    start: '2019',
    end: '2021',
    tasks: [
      'experience.bookii.tasks.0',
      'experience.bookii.tasks.1',
      'experience.bookii.tasks.2',
      'experience.bookii.tasks.3',
    ],
  },
]
