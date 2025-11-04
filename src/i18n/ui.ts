export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
}

export const languageFlags = {
  en: '🇺🇸',
  es: '🇪🇸',
  pt: '🇧🇷',
}

export const defaultLang = 'en'

export const showDefaultLang = false

export const routes = {
  es: {
    portfolio: 'portafolio',
    work: 'trabajo',
  },
  pt: {
    portfolio: 'portifolio',
    work: 'trabalho',
  },
}

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Intro Card
    'intro.welcome': 'welcome',
    'intro.title':
      "Hi, I'm <b>Andrés Camilo Plaza</b>, a software developer, systems engineer and tattoo artist with strong focus on the user experience, animations and micro interactions. I love to create beautiful and functional interfaces, I am passionate about technology and I am always looking for new challenges.",
    'intro.sr.github': 'GitHub Profile',
    'intro.sr.linkedin': 'Linkedin Profile',
    'intro.sr.email': 'Email contact',

    // About Me
    'about.title': 'About me',
    'about.description':
      "Hi, I'm Andrés, a fullstack software developer from Colombia 🇨🇴.",
    'about.tools': 'My primary tools of choice includes:',
    'about.hobbies':
      "Beyond coding, I'm passionate about tattoo, soccer and traveling. An unusual hobby of mine is play classical music in the guitar or ukulele.",

    // Now Card
    'now.title': 'Now',
    'now.whatsThat': "what's that ?",
    'now.description': 'Currently working as freelancer',

    // Experience Card
    'experience.title': 'Experience',
    'experience.viewMore': 'View More',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'View and download my resume by clicking on the button below',
    'cv.download': 'Download resume',

    // Contacts Card
    'contacts.title': "Let's start working together!",
    'contacts.details': 'Contact Details',
    'contacts.socials': 'Socials',

    // Tattoo Card
    'tattoo.title': 'Instagram tattoo',
    'tattoo.description':
      "If you want to see my tattoo's, you can follow me on Instagram.",

    // Study Card
    'study.title': 'Study',

    // Time Zone Card
    'timezone.title': 'Time zone',

    // Portfolio Page
    'portfolio.title': 'Portfolio',
    'portfolio.description': "Projects and some clone's that I did",
    'portfolio.heading': "Projects and clone's",

    // Work Page
    'work.title': 'Work',
    'work.description': 'Places I have worked.',

    // 404 Page
    '404.title': '404 - Not Found',
    '404.description': '404 Error — this page was not found',
    '404.heading': 'Page not found',
    '404.message': "Sorry, we couldn't find the page you're looking for.",
    '404.goHome': 'Go back home',

    // Home Page
    'home.title': 'Andrés Plaza - Full Stack Developer',
    'home.description':
      'Andrés Plaza - Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, Tattoo, Study',
    'home.portfolio': 'Portfolio & Projects',

    // Quote
    'quote.text': 'Anything one man can imagine, other men can make real.',
    'quote.author': '- Jules Verne',

    // Footer
    'footer.builtBy': 'Built by',
    'footer.with': 'with',
    'footer.using':
      'using Astro and Tailwind CSS. The source code is available on',

    // Experience - Common
    'experience.current': 'Current',

    // Experience - Mercado Libre
    'experience.mercadolibre.company': 'Mercado Libre',
    'experience.mercadolibre.position': 'Software Engineer',
    'experience.mercadolibre.location': 'Bogotá D C, Colombia',
    'experience.mercadolibre.tasks.0':
      'Development and maintenance of scalable web applications using modern technologies',
    'experience.mercadolibre.tasks.1':
      'Collaboration with cross-functional teams to deliver high-quality products',
    'experience.mercadolibre.tasks.2':
      'Implementation of best practices and clean code principles',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Software Engineer',
    'experience.straico.location': 'Bogotá D C, Colombia',
    'experience.straico.tasks.0':
      'Integration of AI services and APIs using React and Tailwind CSS',
    'experience.straico.tasks.1':
      'Design and implementation of MongoDB database schemas and queries',
    'experience.straico.tasks.2':
      'Development of user interfaces with focus on performance and accessibility',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Software Engineer',
    'experience.spot2.location': 'Mexico City, Mexico',
    'experience.spot2.tasks.0':
      'Full-stack development of the Spot2 platform using React, Redux, and Material UI',
    'experience.spot2.tasks.1':
      'Implementation of interactive maps and location services using Google Maps API',
    'experience.spot2.tasks.2':
      'Development of internal management platform with React and Redux for state management',
    'experience.spot2.tasks.3':
      'Quality assurance, testing, and debugging of production applications',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Frontend Developer',
    'experience.imaginamos.location': 'Bogotá D C, Colombia',
    'experience.imaginamos.tasks.0':
      'Development of responsive web applications using React, Redux, and Material UI',
    'experience.imaginamos.tasks.1':
      'Implementation of features for ETB telecommunications project',
    'experience.imaginamos.tasks.2':
      'Collaboration with design and backend teams to ensure seamless user experience',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Frontend Developer',
    'experience.inetum.location': 'Bogotá D C, Colombia',
    'experience.inetum.tasks.0':
      'Quality assurance support, bug tracking, and code review processes',
    'experience.inetum.tasks.1':
      'Agile development using SCRUM methodology in cross-functional teams',
    'experience.inetum.tasks.2':
      'Development of Claro projects using React and Angular frameworks',
    'experience.inetum.tasks.3':
      'Implementation of Redux Toolkit for state management, improving development efficiency',

    // Experience - SIG
    'experience.sig.company': 'S I G',
    'experience.sig.position': 'Software Developer',
    'experience.sig.location': 'Bogotá D C, Colombia',
    'experience.sig.tasks.0':
      'Development of admin dashboard using React Admin and Chart.js for data visualization',
    'experience.sig.tasks.1':
      'Implementation of data management and entry forms with validation',

    // Experience - BOOKII
    'experience.bookii.company': 'BOOKII',
    'experience.bookii.position': 'Software Developer',
    'experience.bookii.location': 'Bogotá D C, Colombia',
    'experience.bookii.tasks.0':
      'Collaboration with backend team to develop conversational club features',
    'experience.bookii.tasks.1':
      'Implementation of conversational clubs using Redux for state management',
    'experience.bookii.tasks.2':
      'Localization and content management of Bookii Spanish website',
    'experience.bookii.tasks.3':
      'Static site generation using Gatsby and Contentful CMS for blog content',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.work': 'Trabajo',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',

    // Intro Card
    'intro.welcome': 'bienvenido',
    'intro.title':
      'Hola, soy <b>Andrés Camilo Plaza</b>, desarrollador de software, ingeniero de sistemas y artista del tatuaje con un fuerte enfoque en la experiencia del usuario, animaciones y micro interacciones. Me encanta crear interfaces hermosas y funcionales, soy apasionado por la tecnología y siempre estoy buscando nuevos desafíos.',
    'intro.sr.github': 'Perfil de GitHub',
    'intro.sr.linkedin': 'Perfil de Linkedin',
    'intro.sr.email': 'Contacto por correo',

    // About Me
    'about.title': 'Acerca de mí',
    'about.description':
      'Hola, soy Andrés, un desarrollador de software fullstack de Colombia 🇨🇴.',
    'about.tools': 'Mis herramientas principales incluyen:',
    'about.hobbies':
      'Más allá de la programación, soy apasionado por los tatuajes, el fútbol y los viajes. Un hobby inusual mío es tocar música clásica en la guitarra o el ukelele.',

    // Now Card
    'now.title': 'Ahora',
    'now.whatsThat': '¿qué es eso?',
    'now.description': 'Actualmente trabajando como freelancer',

    // Experience Card
    'experience.title': 'Experiencia',
    'experience.viewMore': 'Ver más',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'Ver y descargar mi currículum haciendo clic en el botón de abajo',
    'cv.download': 'Descargar currículum',

    // Contacts Card
    'contacts.title': '¡Empecemos a trabajar juntos!',
    'contacts.details': 'Detalles de contacto',
    'contacts.socials': 'Redes sociales',

    // Tattoo Card
    'tattoo.title': 'Instagram tatuajes',
    'tattoo.description':
      'Si quieres ver mis tatuajes, puedes seguirme en Instagram.',

    // Study Card
    'study.title': 'Estudios',

    // Time Zone Card
    'timezone.title': 'Zona horaria',

    // Portfolio Page
    'portfolio.title': 'Portafolio',
    'portfolio.description': 'Proyectos y algunos clones que he hecho',
    'portfolio.heading': 'Proyectos y clones',

    // Work Page
    'work.title': 'Trabajo',
    'work.description': 'Lugares donde he trabajado.',

    // 404 Page
    '404.title': '404 - No encontrado',
    '404.description': 'Error 404 — esta página no fue encontrada',
    '404.heading': 'Página no encontrada',
    '404.message': 'Lo sentimos, no pudimos encontrar la página que buscas.',
    '404.goHome': 'Volver al inicio',

    // Home Page
    'home.title': 'Andrés Plaza - Desarrollador Full Stack',
    'home.description':
      'Andrés Plaza - Desarrollador Full Stack - Portafolio, Proyectos, CV, Acerca de Mí, Contacto, Zona Horaria, Ahora, Experiencia, Tatuajes, Estudios',
    'home.portfolio': 'Portafolio y Proyectos',

    // Quote
    'quote.text':
      'Todo lo que un hombre puede imaginar, otros hombres pueden hacerlo realidad.',
    'quote.author': '- Jules Verne',

    // Footer
    'footer.builtBy': 'Construido por',
    'footer.with': 'con',
    'footer.using':
      'usando Astro y Tailwind CSS. El código fuente está disponible en',

    // Experience - Common
    'experience.current': 'Actual',

    // Experience - Mercado Libre
    'experience.mercadolibre.company': 'Mercado Libre',
    'experience.mercadolibre.position': 'Ingeniero de Software',
    'experience.mercadolibre.location': 'Bogotá D C, Colombia',
    'experience.mercadolibre.tasks.0':
      'Desarrollo y mantenimiento de aplicaciones web escalables usando tecnologías modernas',
    'experience.mercadolibre.tasks.1':
      'Colaboración con equipos multidisciplinarios para entregar productos de alta calidad',
    'experience.mercadolibre.tasks.2':
      'Implementación de mejores prácticas y principios de código limpio',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Ingeniero de Software',
    'experience.straico.location': 'Bogotá D C, Colombia',
    'experience.straico.tasks.0':
      'Integración de servicios de IA y APIs usando React y Tailwind CSS',
    'experience.straico.tasks.1':
      'Diseño e implementación de esquemas y consultas de base de datos MongoDB',
    'experience.straico.tasks.2':
      'Desarrollo de interfaces de usuario con enfoque en rendimiento y accesibilidad',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Ingeniero de Software',
    'experience.spot2.location': 'Ciudad de México, México',
    'experience.spot2.tasks.0':
      'Desarrollo full-stack de la plataforma Spot2 usando React, Redux y Material UI',
    'experience.spot2.tasks.1':
      'Implementación de mapas interactivos y servicios de ubicación usando Google Maps API',
    'experience.spot2.tasks.2':
      'Desarrollo de plataforma interna de gestión con React y Redux para manejo de estado',
    'experience.spot2.tasks.3':
      'Aseguramiento de calidad, pruebas y depuración de aplicaciones en producción',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Desarrollador Frontend',
    'experience.imaginamos.location': 'Bogotá D C, Colombia',
    'experience.imaginamos.tasks.0':
      'Desarrollo de aplicaciones web responsivas usando React, Redux y Material UI',
    'experience.imaginamos.tasks.1':
      'Implementación de funcionalidades para proyecto de telecomunicaciones ETB',
    'experience.imaginamos.tasks.2':
      'Colaboración con equipos de diseño y backend para garantizar experiencia de usuario fluida',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Desarrollador Frontend',
    'experience.inetum.location': 'Bogotá D C, Colombia',
    'experience.inetum.tasks.0':
      'Soporte en aseguramiento de calidad, seguimiento de bugs y procesos de revisión de código',
    'experience.inetum.tasks.1':
      'Desarrollo ágil usando metodología SCRUM en equipos multidisciplinarios',
    'experience.inetum.tasks.2':
      'Desarrollo de proyectos Claro usando frameworks React y Angular',
    'experience.inetum.tasks.3':
      'Implementación de Redux Toolkit para manejo de estado, mejorando la eficiencia en desarrollo',

    // Experience - SIG
    'experience.sig.company': 'S I G',
    'experience.sig.position': 'Desarrollador de Software',
    'experience.sig.location': 'Bogotá D C, Colombia',
    'experience.sig.tasks.0':
      'Desarrollo de dashboard administrativo usando React Admin y Chart.js para visualización de datos',
    'experience.sig.tasks.1':
      'Implementación de formularios de gestión e ingreso de datos con validación',

    // Experience - BOOKII
    'experience.bookii.company': 'BOOKII',
    'experience.bookii.position': 'Desarrollador de Software',
    'experience.bookii.location': 'Bogotá D C, Colombia',
    'experience.bookii.tasks.0':
      'Colaboración con equipo de backend para desarrollar funcionalidades de clubes conversacionales',
    'experience.bookii.tasks.1':
      'Implementación de clubes conversacionales usando Redux para manejo de estado',
    'experience.bookii.tasks.2':
      'Localización y gestión de contenido del sitio web Bookii en español',
    'experience.bookii.tasks.3':
      'Generación de sitios estáticos usando Gatsby y Contentful CMS para contenido del blog',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.portfolio': 'Portfólio',
    'nav.work': 'Trabalho',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',

    // Intro Card
    'intro.welcome': 'bem-vindo',
    'intro.title':
      'Olá, sou <b>Andrés Camilo Plaza</b>, desenvolvedor de software, engenheiro de sistemas e artista de tatuagem com forte foco na experiência do usuário, animações e micro interações. Adoro criar interfaces bonitas e funcionais, sou apaixonado por tecnologia e sempre estou em busca de novos desafios.',
    'intro.sr.github': 'Perfil do GitHub',
    'intro.sr.linkedin': 'Perfil do Linkedin',
    'intro.sr.email': 'Contato por e-mail',

    // About Me
    'about.title': 'Sobre mim',
    'about.description':
      'Olá, sou Andrés, desenvolvedor de software fullstack da Colômbia 🇨🇴.',
    'about.tools': 'Minhas principais ferramentas incluem:',
    'about.hobbies':
      'Além da programação, sou apaixonado por tatuagens, futebol e viagens. Um hobby incomum meu é tocar música clássica no violão ou ukulele.',

    // Now Card
    'now.title': 'Agora',
    'now.whatsThat': 'o que é isso?',
    'now.description': 'Atualmente trabalhando como freelancer',

    // Experience Card
    'experience.title': 'Experiência',
    'experience.viewMore': 'Ver mais',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'Visualize e baixe meu currículo clicando no botão abaixo',
    'cv.download': 'Baixar currículo',

    // Contacts Card
    'contacts.title': 'Vamos começar a trabalhar juntos!',
    'contacts.details': 'Detalhes de contato',
    'contacts.socials': 'Redes sociais',

    // Tattoo Card
    'tattoo.title': 'Instagram tatuagens',
    'tattoo.description':
      'Se você quiser ver minhas tatuagens, pode me seguir no Instagram.',

    // Study Card
    'study.title': 'Estudos',

    // Time Zone Card
    'timezone.title': 'Fuso horário',

    // Portfolio Page
    'portfolio.title': 'Portfólio',
    'portfolio.description': 'Projetos e alguns clones que fiz',
    'portfolio.heading': 'Projetos e clones',

    // Work Page
    'work.title': 'Trabalho',
    'work.description': 'Lugares onde trabalhei.',

    // 404 Page
    '404.title': '404 - Não encontrado',
    '404.description': 'Erro 404 — esta página não foi encontrada',
    '404.heading': 'Página não encontrada',
    '404.message':
      'Desculpe, não conseguimos encontrar a página que você está procurando.',
    '404.goHome': 'Voltar ao início',

    // Home Page
    'home.title': 'Andrés Plaza - Desenvolvedor Full Stack',
    'home.description':
      'Andrés Plaza - Desenvolvedor Full Stack - Portfólio, Projetos, CV, Sobre Mim, Contato, Fuso Horário, Agora, Experiência, Tatuagens, Estudos',
    'home.portfolio': 'Portfólio e Projetos',

    // Quote
    'quote.text':
      'Tudo que um homem pode imaginar, outros homens podem tornar realidade.',
    'quote.author': '- Jules Verne',

    // Footer
    'footer.builtBy': 'Construído por',
    'footer.with': 'com',
    'footer.using':
      'usando Astro e Tailwind CSS. O código-fonte está disponível em',

    // Experience - Common
    'experience.current': 'Atual',

    // Experience - Mercado Libre
    'experience.mercadolibre.company': 'Mercado Livre',
    'experience.mercadolibre.position': 'Engenheiro de Software',
    'experience.mercadolibre.location': 'Bogotá D C, Colômbia',
    'experience.mercadolibre.tasks.0':
      'Desenvolvimento e manutenção de aplicações web escaláveis usando tecnologias modernas',
    'experience.mercadolibre.tasks.1':
      'Colaboração com equipes multidisciplinares para entregar produtos de alta qualidade',
    'experience.mercadolibre.tasks.2':
      'Implementação de melhores práticas e princípios de código limpo',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Engenheiro de Software',
    'experience.straico.location': 'Bogotá D C, Colômbia',
    'experience.straico.tasks.0':
      'Integração de serviços de IA e APIs usando React e Tailwind CSS',
    'experience.straico.tasks.1':
      'Design e implementação de esquemas e consultas de banco de dados MongoDB',
    'experience.straico.tasks.2':
      'Desenvolvimento de interfaces de usuário com foco em performance e acessibilidade',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Engenheiro de Software',
    'experience.spot2.location': 'Cidade do México, México',
    'experience.spot2.tasks.0':
      'Desenvolvimento full-stack da plataforma Spot2 usando React, Redux e Material UI',
    'experience.spot2.tasks.1':
      'Implementação de mapas interativos e serviços de localização usando Google Maps API',
    'experience.spot2.tasks.2':
      'Desenvolvimento de plataforma interna de gestão com React e Redux para gerenciamento de estado',
    'experience.spot2.tasks.3':
      'Garantia de qualidade, testes e depuração de aplicações em produção',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Desenvolvedor Frontend',
    'experience.imaginamos.location': 'Bogotá D C, Colômbia',
    'experience.imaginamos.tasks.0':
      'Desenvolvimento de aplicações web responsivas usando React, Redux e Material UI',
    'experience.imaginamos.tasks.1':
      'Implementação de funcionalidades para projeto de telecomunicações ETB',
    'experience.imaginamos.tasks.2':
      'Colaboração com equipes de design e backend para garantir experiência de usuário fluida',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Desenvolvedor Frontend',
    'experience.inetum.location': 'Bogotá D C, Colômbia',
    'experience.inetum.tasks.0':
      'Suporte em garantia de qualidade, rastreamento de bugs e processos de revisão de código',
    'experience.inetum.tasks.1':
      'Desenvolvimento ágil usando metodologia SCRUM em equipes multidisciplinares',
    'experience.inetum.tasks.2':
      'Desenvolvimento de projetos Claro usando frameworks React e Angular',
    'experience.inetum.tasks.3':
      'Implementação de Redux Toolkit para gerenciamento de estado, melhorando a eficiência em desenvolvimento',

    // Experience - SIG
    'experience.sig.company': 'S I G',
    'experience.sig.position': 'Desenvolvedor de Software',
    'experience.sig.location': 'Bogotá D C, Colômbia',
    'experience.sig.tasks.0':
      'Desenvolvimento de dashboard administrativo usando React Admin e Chart.js para visualização de dados',
    'experience.sig.tasks.1':
      'Implementação de formulários de gerenciamento e entrada de dados com validação',

    // Experience - BOOKII
    'experience.bookii.company': 'BOOKII',
    'experience.bookii.position': 'Desenvolvedor de Software',
    'experience.bookii.location': 'Bogotá D C, Colômbia',
    'experience.bookii.tasks.0':
      'Colaboração com equipe de backend para desenvolver funcionalidades de clubes conversacionais',
    'experience.bookii.tasks.1':
      'Implementação de clubes conversacionais usando Redux para gerenciamento de estado',
    'experience.bookii.tasks.2':
      'Localização e gestão de conteúdo do site Bookii em espanhol',
    'experience.bookii.tasks.3':
      'Geração de sites estáticos usando Gatsby e Contentful CMS para conteúdo do blog',
  },
} as const

export type Translations = (typeof ui)[typeof defaultLang]
