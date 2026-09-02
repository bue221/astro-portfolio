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

type CatalogEntry = Omit<ProjectItem, 'id' | 'imagePath' | 'imageAlt'> & {
  id?: string
}

export const LOCAL_PROJECTS: ProjectItem[] = [
  {
    id: 'laponttes',
    name: 'Laponttes',
    description:
      'Restaurant website with menu, store and visit-first experience for Laponttes.',
    website: 'https://www.laponttes.com/',
    tags: ['Astro', 'Restaurant', 'Landing', 'Full Stack'],
  },
  {
    id: 'shell-sort',
    name: 'Shell sort',
    description: 'Sorting algorithm visualizer built with JavaScript.',
    tags: ['Algorithms', 'JavaScript'],
  },
  {
    id: 'vue-mapbox',
    name: 'Vue mapbox',
    description: 'Interactive maps experience built with Vue and Mapbox.',
    tags: ['Vue', 'Maps', 'Frontend'],
  },
  {
    id: 'casa-fest',
    name: 'casa-fest',
    description: 'Event landing and frontend experience for Casa Fest.',
    tags: ['Frontend', 'Events'],
  },
  {
    id: 'minecraft-clone',
    name: 'Minecraft clone',
    description: 'Voxel-style game clone exploring 3D rendering basics.',
    tags: ['Three.js', 'Game', 'Clone'],
  },
  {
    id: 'game-of-life',
    name: 'Game of life',
    description: "Conway's Game of Life simulation on HTML canvas.",
    tags: ['Algorithms', 'Canvas', 'JavaScript'],
  },
  {
    id: 'rave-clud',
    name: 'Rave Clud',
    description: 'React app for events and nightlife experiences.',
    tags: ['React', 'Events', 'Frontend'],
  },
  {
    id: 'empleados-angular',
    name: 'empleados angular',
    description: 'Employee management CRUD built with Angular.',
    tags: ['Angular', 'CRUD'],
  },
  {
    id: 'landing-portfolio',
    name: 'Landing Portfolio',
    description: 'Personal landing page focused on portfolio presentation.',
    tags: ['Landing', 'HTML/CSS'],
  },
  {
    id: 'angular-images-ngrx',
    name: 'Angular images with ngrx',
    description: 'Image gallery with NgRx state management in Angular.',
    tags: ['Angular', 'NgRx', 'State'],
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Marketing landing page with responsive layout.',
    tags: ['Landing', 'Frontend'],
  },
  {
    id: 'vue-gym-todolist',
    name: 'Vue Gym todolist',
    description: 'Gym workout todo list built with Vue.',
    tags: ['Vue', 'Productivity'],
  },
  {
    id: 'juego-vida-concat',
    name: 'Juego de la vida concat',
    description: 'Extended Game of Life variant with concatenation rules.',
    tags: ['Algorithms', 'Canvas', 'JavaScript'],
  },
  {
    id: 'crud-nextjs-mongodb',
    name: 'Crud nextjs mongodb',
    description: 'Full-stack CRUD app with Next.js and MongoDB.',
    tags: ['Next.js', 'MongoDB', 'Full Stack'],
  },
  {
    id: 'prueba-gradiweb',
    name: 'prueba-gradiweb',
    description: 'Frontend challenge project for Gradiweb.',
    tags: ['Frontend', 'Challenge'],
  },
  {
    id: 'linkedin-clone',
    name: 'LinkedIn Clone',
    description: 'Social network UI clone inspired by LinkedIn.',
    tags: ['React', 'Clone', 'Social'],
  },
  {
    id: 'covid-19',
    name: 'covid-19',
    description: 'COVID-19 data dashboard with API integration.',
    tags: ['API', 'Data Viz', 'React'],
  },
  {
    id: 'netflix-clone',
    name: 'Netflix clone',
    description: 'UI clone focused on layout, media cards and browsing patterns.',
    tags: ['React', 'Clone', 'UI'],
  },
  {
    id: 'triki-game',
    name: 'Triki game',
    description: 'Tic-tac-toe game built with vanilla JavaScript.',
    tags: ['Game', 'JavaScript'],
  },
  {
    id: 'dog-api',
    name: 'Dog api',
    description: 'Dog image browser powered by a public REST API.',
    tags: ['API', 'JavaScript'],
  },
  {
    id: 'app-prueba',
    name: 'App prueba',
    description: 'Experimental frontend app for UI practice.',
    tags: ['Frontend'],
  },
  {
    id: 'react-admin',
    name: 'React-admin',
    description: 'Admin dashboard built with React Admin.',
    tags: ['React', 'Admin', 'Dashboard'],
  },
  {
    id: 'portafolio-html-css-js',
    name: 'Portafolio con html,css y javascript',
    description: 'Early portfolio built with HTML, CSS and JavaScript.',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    id: 'calculadora-javascript',
    name: 'Calculadora en javascript',
    description: 'Calculator UI built with vanilla JavaScript.',
    tags: ['JavaScript', 'UI'],
  },
  {
    id: 'youtube-clone',
    name: 'Youtube clone',
    description: 'Video platform UI clone inspired by YouTube.',
    tags: ['React', 'Clone', 'UI'],
  },
  {
    id: 'react-firebase-todo',
    name: 'React and firebase todo list app',
    description: 'Todo list with Firebase auth and realtime database.',
    tags: ['React', 'Firebase', 'Full Stack'],
  },
  {
    id: 'portfolio-astro',
    name: 'Portfolio',
    description: 'Personal portfolio built with Astro, React islands and Tailwind.',
    website: 'https://portafolio.bue221.xyz/',
    repository: 'https://github.com/bue221/astro-portfolio',
    tags: ['Astro', 'Frontend'],
  },
  {
    id: 'intellectus',
    name: 'Intellectus my firts website',
    description: 'First personal website — Intellectus landing page.',
    tags: ['HTML/CSS', 'Landing'],
  },
].map((project) => ({
  ...project,
  imagePath: getProjectCoverPath(project.name),
  imageAlt: `${project.name} cover`,
}))
