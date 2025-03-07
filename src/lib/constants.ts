import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/HunterHelms',
  linkedin: 'https://www.linkedin.com/in/brodiehelms/',
  mail: 'mailto:bhelms@redmontdigital.com',
  instagram: 'https://www.instagram.com/brodiehelms/',
  medium: 'https://medium.com/@brodiehelms',
  substack: 'https://pmbrodie.substack.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
  rewardzilla: 'https://www.rewardzilla.net/',
}

// Global
export const SITE: Site = {
  TITLE: 'bhelms.com',
  DESCRIPTION:
    'Welcome to brodieh.com, a product enthusiast and software developer portfolio and blog.',
  AUTHOR: 'Brodie Helms',
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
    institution: 'Zero to One',
    link: 'https://www.amazon.com/Zero-to-One-audiobook/dp/B00M284NY2/ref=sr_1_1?crid=2LJXZFAEBHZ86&dib=eyJ2IjoiMSJ9.0upz4yz5m-yZatBvr21h3lnqQ_mtMlwQMIRl-xs60Ubgta-t5aVW8xAnhx9Ul624jdBCl80muQp_4hg78Oku0zgnmwH_NzDrDD23kccan78ctSPy7kNtSRPTbjSpi-qx09LhkFkdIBx9YyGMWoHVcBoHUAV8Hm9td08BIYVhMTKjybeJp8kyE9sKqyBBi7mdhmC7CslvVfbDccOCn6A2LQUdBmoIILl3djkyuTzKMGk.Whw16o7ECRdr4ox-qLEKwh1X7pkbzJ6S9U7aIR3ZkXs&dib_tag=se&keywords=Zero+to+one&qid=1741314069&sprefix=zero+to+one%2Caps%2C137&sr=8-1/',
    date: '2014',
  },
  {
    title: '...',
    institution: 'Crossing the Chasm',
    link: 'https://www.amazon.com/Crossing-Chasm-Geoffrey-A-Moore-audiobook/dp/B00A2ZHMKY/ref=sr_1_1?crid=1SU0MOWKHJ0KO&dib=eyJ2IjoiMSJ9.krsxGnKYAgLbAixfWcwc-Vl9HDOy2D3qYvqwBWpkic4vu7c0ejUJFGNQFh4IQ16zPKTihxDi48Wj6zCkAo-pFJCWWcexaxtZGuZ1l6rnsZvS9wY5DusOCjxOR3fRqn_uaGJ-R4YwlTH2PqUCqCur5DzeVEjRNgAZLs66aweS5V8plp7QOweaFwHtk9EFrC85Ks_0sKjoQDNarv7SxW7ZjZ4isu5dy4ZIh_9X4jtIUqB94s8J9_3U6wJEC14V78SehHciBFY1a88HPRKUn2RY6rfAhN0UJ6QoxyPKusMtJdzPIgG8YXZcINZY6qopKMYAK3YbodnK2w5qlV3BreLKNg.VIIsZP2zta0mSkaLx6wAn_TAvXwEmydPgfMyJ2DxNKQ&dib_tag=se&keywords=crossing+the+chasm&qid=1741314326&s=audible&sprefix=Crossing+the+ch%2Caudible%2C130&sr=1-1',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Greenlights',
    link: 'https://www.amazon.com/Greenlights/dp/B08HLW2JXD/ref=sr_1_1?crid=36C40TSPLGDSD&dib=eyJ2IjoiMSJ9.1IjHOR4abYvDCVPfLKD6C04Ki9X0vQc2gAofBrktsryxQJigg9UfIm-GIlckPuNEAddEYwHaPrUH-CProR5KdflDtUIPMWokZD0vjm3xVg8jelR5dWQY99rHUjLKNGYxLWC4sVwN-QOI7vMKEggx2i--aq8UxgGq8D1oCAEJVWghsXbT856Fz3KRJnLKTcz6hLyatlv_USv5jbQFGnvpW-uP-hqqiwCXo0E86mBrvUL3qCWlLTZsVl0DDzZR1EGoOEjsiZdhkPAbzZsZ-pD5AvcJH739pfXr3AUjWfXsIbq1YxUudJyAaohZXVEb1e5K.E9vBGt-ZQVh4VCN3hlu1LL7rOChrWqJ1EAILEDJfWC4&dib_tag=se&keywords=greenlights+matthew+mcconaughey+book&qid=1741314380&s=audible&sprefix=Green%2Caudible%2C116&sr=1-1',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'The man who solved the market',
    link: 'https://www.amazon.com/Man-Who-Solved-Market-audiobook/dp/B07VLBSWDC/ref=sr_1_1?crid=2YKJY2R19XJ7R&dib=eyJ2IjoiMSJ9.sCgu_bPNcC0T7ktxjXzmlxyTkMPyr1LHnWvI5MnqTCK58PN2XgtN_OCmrykjA-Nw5RHrNrSpykBHMMkIfX6PHgVEzii-IkcEZqLK8JRqg27idzwccLPPs6pB9ixL8Hqmcuxsr8mAhpYN6C0TCYWGJ-C81U6xtZ6R6zvoBqiKhQP_kCKDJfCX1EMr7ik1gf7c1v-WSf3lGqj_ryNdiTQCOs7DhYT1BpMvez5i3W4k9-e0Y_W73vmGEys-IkzApvX0_aZ-uGZcZM7csLFpy9h8PMaMePTvVA3bQu5wYEkgSmw.8C94nbWNlxYRCL4adGiqBxuD2bAYHdtzvc3ErYoP3r0&dib_tag=se&keywords=The+man+who+solved+the+market&qid=1741314429&s=audible&sprefix=the+man+who+solved+the+market%2Caudible%2C115&sr=1-1',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Principles',
    link: 'https://www.amazon.com/Principles-Ray-Dalio-audiobook/dp/B074B2CZJG/ref=sr_1_1?crid=2U2271YGDRA3J&dib=eyJ2IjoiMSJ9.Ti85k-rZTJGLsj1n76lvI8y8N3bMqzmf-ISlcprcXCz8BRv8XlEUQZLyPyOju9n3g1NL9AafD4Jfp_3JJh0jQ4h3I9pRUDdixZ2ysP2J03ttbmorzdtypdnS7wohKFjXins7RwODWyIVJ5_uNBGuTt3wWtj2zwgg43-W4EJhilI.mZrafgPCdGhrbxORp8kykFCSVO8AEYp-EKw5Wx_pGLk&dib_tag=se&keywords=Principles+by+ray+dalio&qid=1741314479&s=audible&sprefix=principles+by+ray+dalio+%2Caudible%2C120&sr=1-1',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'FIXD',
    location: 'Atlanta, GA (Remote)',
    position: 'Product Manager',
    start: '2022',
    link: 'https://fixdapp.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'LinkedIn',
    location: 'San Francisco, CA',
    position: 'Technical Program Manager',
    link: 'https://linkedin.com/',
    start: '2018',
    end: '2021',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'VynlMnky',
    link: 'https://www.vinylmnky.com/?srsltid=AfmBOoodTIt1wPYINyslQBeVnlqlYCLlRbOYM0NKz8ijFmv1X8-V0YxK',
    location: 'Austin, TX',
    position: 'Frontend Developer',
    start: '2017',
    end: '2017',
    tasks: [
      'Development of the VynlMnkt platform with the use of React, Redux, and Material UI',
      'Work in VynlMnky e-commerce site with the use of Shopify, Liquid, and React',
    ],
  },
  {
    company: 'LinkedIn',
    location: 'San Francisco, CA',
    position: 'Technical Program Manager Intern',
    link: 'https://linkedin.com/',
    start: '2017',
    end: '2017',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
]
