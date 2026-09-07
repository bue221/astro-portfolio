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
    id: 'vue-mapbox',
    name: 'Vue mapbox',
    description: 'Interactive maps experience built with Vue and Mapbox.',
    website: 'https://fluffy-sawine-3798e9.netlify.app/',
    repository: 'https://github.com/bue221/vuejs-mapbox-course',
    tags: ['Vue', 'Maps', 'Frontend'],
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
    id: 'game-of-life',
    name: 'Game of life',
    description: "Conway's Game of Life simulation on HTML canvas.",
    repository: 'https://github.com/bue221/gameOfLyfe',
    tags: ['Algorithms', 'Canvas', 'JavaScript'],
  },
  {
    id: 'rave-clud',
    name: 'Rave Clud',
    description: 'React app for events and nightlife experiences.',
    website: 'https://raveclud.netlify.app/',
    repository: 'https://github.com/bue221/rave-clud',
    tags: ['React', 'Events', 'Frontend'],
  },
  {
    id: 'empleados-angular',
    name: 'empleados angular',
    description: 'Employee management CRUD built with Angular.',
    website: 'https://angular-empleados.vercel.app/',
    repository: 'https://github.com/bue221/angularEmpleados',
    tags: ['Angular', 'CRUD'],
  },
  {
    id: 'landing-portfolio',
    name: 'Landing Portfolio',
    description: 'Personal landing page focused on portfolio presentation.',
    website: 'https://portfolio-web-one.vercel.app/',
    repository: 'https://github.com/bue221/Portfolio-website',
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
    website: 'https://bue221.github.io/landing',
    repository: 'https://github.com/bue221/landing',
    tags: ['Landing', 'Frontend'],
  },
  {
    id: 'vue-gym-todolist',
    name: 'Vue Gym todolist',
    description: 'Gym workout todo list built with Vue.',
    website: 'https://bue221.github.io/vue-todoGym/',
    repository: 'https://github.com/bue221/vue-todoGym',
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
    website: 'https://crudnote-git-main-bue221.vercel.app',
    repository: 'https://github.com/bue221/note-nextjs',
    tags: ['Next.js', 'MongoDB', 'Full Stack'],
  },
  {
    id: 'prueba-gradiweb',
    name: 'prueba-gradiweb',
    description: 'Frontend challenge project for Gradiweb.',
    website: 'https://prueba-gradiweb-a23ea.web.app/',
    repository: 'https://github.com/bue221/GradiWeb-prueba',
    tags: ['Frontend', 'Challenge'],
  },
  {
    id: 'linkedin-clone',
    name: 'LinkedIn Clone',
    description: 'Social network UI clone inspired by LinkedIn.',
    website: 'https://linkedin-clone-47103.web.app/home',
    repository: 'https://github.com/bue221/LinkedIn-clone',
    tags: ['React', 'Clone', 'Social'],
  },
  {
    id: 'covid-19',
    name: 'covid-19',
    description: 'COVID-19 data dashboard with API integration.',
    website: 'https://bue221.github.io/covid-19/index.html',
    repository: 'https://github.com/bue221/covid-19',
    tags: ['API', 'Data Viz', 'React'],
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
    id: 'app-prueba',
    name: 'App prueba',
    description: 'Experimental frontend app for UI practice.',
    website: 'https://bue221.github.io/Prueba/',
    repository: 'https://github.com/bue221/Prueba',
    tags: ['Frontend'],
  },
  {
    id: 'react-admin',
    name: 'React-admin',
    description: 'Admin dashboard built with React Admin.',
    website: 'https://bue221.github.io/first-steps-ReactAdmin/#/posts',
    repository: 'https://github.com/bue221/first-steps-ReactAdmin',
    tags: ['React', 'Admin', 'Dashboard'],
  },
  {
    id: 'portafolio-html-css-js',
    name: 'Portafolio con html,css y javascript',
    description: 'Early portfolio built with HTML, CSS and JavaScript.',
    website: 'https://bue221.github.io/landing-test',
    repository: 'https://github.com/bue221/landing-test',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    id: 'calculadora-javascript',
    name: 'Calculadora en javascript',
    description: 'Calculator UI built with vanilla JavaScript.',
    website: 'https://bue221.github.io/calculadora/',
    repository: 'https://github.com/bue221/calculadora',
    tags: ['JavaScript', 'UI'],
  },
  {
    id: 'youtube-clone',
    name: 'Youtube clone',
    description: 'Video platform UI clone inspired by YouTube.',
    website: 'https://youtube-clone-prod.vercel.app/',
    repository: 'https://github.com/bue221/youtube-clone',
    tags: ['React', 'Clone', 'UI'],
  },
  {
    id: 'react-firebase-todo',
    name: 'React and firebase todo list app',
    description: 'Todo list with Firebase auth and realtime database.',
    website: 'https://bue221.github.io/todo-app-firebase/',
    repository: 'https://github.com/bue221/todo-app-firebase',
    tags: ['React', 'Firebase', 'Full Stack'],
  },
  {
    id: 'portfolio-astro',
    name: 'Portfolio',
    description:
      'Personal portfolio built with Astro, React islands and Tailwind.',
    website: 'https://portafolio.bue221.xyz/',
    repository: 'https://github.com/bue221/astro-portfolio',
    tags: ['Astro', 'Frontend'],
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
