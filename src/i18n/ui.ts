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
      "Hi, I'm <b>Andrés Camilo Plaza</b>, a Full Stack + AI developer with 4+ years of experience. Strong frontend craft in React/Next.js and TypeScript, plus backend work in Python and Go. I build AI agent platforms, product UIs and polished interfaces — and I'm also a tattoo artist always looking for the next challenge.",
    'intro.sr.github': 'GitHub Profile',
    'intro.sr.linkedin': 'Linkedin Profile',
    'intro.sr.email': 'Email contact',

    // About Me
    'about.title': 'About me',
    'about.description':
      "Hi, I'm Andrés, a Full Stack + AI developer from Colombia 🇨🇴 with 4+ years building product UIs and AI-powered systems.",
    'about.tools': 'My preferred stack includes:',
    'about.hobbies':
      "Beyond coding, I'm passionate about tattoo, soccer and traveling. An unusual hobby of mine is play classical music in the guitar or ukulele.",

    // Now Card
    'now.title': 'Now',
    'now.whatsThat': "what's that ?",
    'now.description': 'Software Engineer AI at Mercado Libre',

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
    'portfolio.description':
      'Selected projects, clones and experiments by Andrés Plaza — filter by stack and role.',
    'portfolio.heading': 'Projects & experiments',
    'portfolio.filter.all': 'All',
    'portfolio.filter.empty': 'No projects match this filter.',
    'portfolio.filter.results': '{count} projects',
    'portfolio.repo': 'Repository available',
    'portfolio.live': 'View live site',
    'portfolio.repository': 'View source code',
    'portfolio.noLinks': 'No links available yet.',
    'portfolio.backToAll': 'Back to all projects',

    // Work Page
    'work.title': 'Work',
    'work.description':
      'Professional experience of Andrés Plaza as Full Stack + AI engineer across product and platform teams.',

    // 404 Page
    '404.title': '404 - Not Found',
    '404.description': '404 Error — this page was not found',
    '404.heading': 'Page not found',
    '404.message': "Sorry, we couldn't find the page you're looking for.",
    '404.goHome': 'Go back home',

    // Home Page
    'home.title': 'Andrés Plaza - Full Stack + AI Developer',
    'home.description':
      'Andrés Plaza (Bue221) — Full Stack + AI developer from Colombia. React/Next.js, Python, Go, LangChain and AI agent platforms. Portfolio, work experience and projects.',
    'home.portfolio': 'Portfolio & Projects',

    // AI toolkit
    'ai.title': 'AI-native workflow',
    'ai.description':
      'I treat AI as part of the engineering stack: agents, tools and context that help me ship faster without lowering the quality bar.',
    'ai.footer': 'Human judgment in the loop',
    'ai.tools.cursor':
      'Daily IDE for multi-file refactors, reviews and design iteration.',
    'ai.tools.claude':
      'Deep coding sessions, long-context reasoning and careful edits.',
    'ai.tools.codex':
      'Autonomous task runs, repo exploration and parallel experiments.',
    'ai.tools.mcp':
      'Model Context Protocol to connect editors with real project tools.',
    'ai.tools.skills': 'Reusable skills that encode how I want agents to work.',
    'ai.tools.context':
      'Context engineering so answers stay grounded in the codebase.',

    // Terminal Card
    'terminal.cardTitle': 'bue221 — portfolio.sh',
    'terminal.placeholder': 'type a command…',
    'terminal.greeting': '👋  Welcome to the interactive terminal!',
    'terminal.helpHint': '  Type "help" to see available commands.',
    'terminal.helpIntro': 'Available commands:',
    'terminal.helpDesc': 'Show this help message',
    'terminal.whoamiDesc': 'About me',
    'terminal.whoamiLocation': 'Bogotá, Colombia 🇨🇴',
    'terminal.whoamiRole': 'Software Engineer AI @ Mercado Libre',
    'terminal.whoamiHobby': 'Guitar · Ukulele · Tattoo · Soccer',
    'terminal.skillsDesc': 'My tech stack',
    'terminal.contactDesc': 'Contact & socials',
    'terminal.clearDesc': 'Clear the terminal',
    'terminal.notFound': 'Command "{cmd}" not found. Type "help" for options.',
    'terminal.suggest': 'Suggested commands',

    // Available for work
    'available.title': 'Available for work',
    'available.description':
      "Open to new projects, freelance work or full-time roles. Let's build something great together.",
    'available.cta': 'Get in touch',

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
    'experience.mercadolibre.position': 'Software Engineer AI',
    'experience.mercadolibre.location': 'Bogotá D C, Colombia',
    'experience.mercadolibre.tasks.0':
      'Built an evals platform that labels and classifies 10,000+ daily conversations across 10 AI agents used by People, customer support and sellers',
    'experience.mercadolibre.tasks.1':
      'Implemented DataDog observability dashboards that cut response time for tag-generation outages and uncategorized conversations',
    'experience.mercadolibre.tasks.2':
      'Built reusable Web Components shared across micro frontends in 3 apps at once',
    'experience.mercadolibre.tasks.3':
      'Developed the roles/permissions backoffice and conversation explorer modules with SDD/BDD, using AI agents and skills in the delivery flow',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Frontend Tech Lead',
    'experience.straico.location': 'Freelance · Bogotá, Colombia',
    'experience.straico.tasks.0':
      'Led technically and mentored 3 junior developers, defining architecture and engineering practices',
    'experience.straico.tasks.1':
      'Optimized the realtime chat frontend (re-renders and memoization), eliminating high browser CPU usage with the tab open',
    'experience.straico.tasks.2':
      'Unified multiple AI models through OpenRouter and integrated image generation and text-to-speech',
    'experience.straico.tasks.3':
      'Optimized MongoDB queries with indexes',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Senior Frontend Developer & AI Specialist',
    'experience.spot2.location': 'Mexico City, Mexico',
    'experience.spot2.tasks.0':
      'Built an AI chatbot with Python and LangChain that increased lead capture by 110%',
    'experience.spot2.tasks.1':
      'Cut map-view re-render errors by 40–50% and duplicate requests by 90%',
    'experience.spot2.tasks.2':
      'Designed a HOC-per-filter architecture and migrated React state to Zustand, improving team delivery flow',
    'experience.spot2.tasks.3':
      'Shipped AWS microservices with GitHub Actions CI/CD (Lambda, SQS, SNS) and mentored the AI team on LangChain, LangGraph, LangSmith and Pytest',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Frontend Developer',
    'experience.imaginamos.location': 'Bogotá D C, Colombia',
    'experience.imaginamos.tasks.0':
      'Built the Brilla CMS end to end for client ETB',
    'experience.imaginamos.tasks.1':
      'Implemented ETB commercial flows, including complex forms, and the Yustii interface',
    'experience.imaginamos.tasks.2':
      'Delivered React, Next.js and Angular features in TypeScript across product surfaces',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Frontend Developer',
    'experience.inetum.location': 'Bogotá D C, Colombia',
    'experience.inetum.tasks.0':
      'Developed features for Claro projects with React and Angular under SCRUM',
    'experience.inetum.tasks.1':
      'Implemented Redux Toolkit for state management and supported QA and debugging',
    'experience.inetum.tasks.2':
      'Collaborated in cross-functional agile delivery for telecom product work',

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
      'Hola, soy <b>Andrés Camilo Plaza</b>, desarrollador Full Stack + IA con más de 4 años de experiencia. Dominio sólido de React/Next.js y TypeScript, más backend en Python y Go. Construyo plataformas de agentes de IA, UIs de producto e interfaces pulidas — y también soy artista del tatuaje siempre buscando nuevos desafíos.',
    'intro.sr.github': 'Perfil de GitHub',
    'intro.sr.linkedin': 'Perfil de Linkedin',
    'intro.sr.email': 'Contacto por correo',

    // About Me
    'about.title': 'Acerca de mí',
    'about.description':
      'Hola, soy Andrés, desarrollador Full Stack + IA de Colombia 🇨🇴 con más de 4 años construyendo UIs de producto y sistemas impulsados por IA.',
    'about.tools': 'Mi stack preferido incluye:',
    'about.hobbies':
      'Más allá de la programación, soy apasionado por los tatuajes, el fútbol y los viajes. Un hobby inusual mío es tocar música clásica en la guitarra o el ukelele.',

    // Now Card
    'now.title': 'Ahora',
    'now.whatsThat': '¿qué es eso?',
    'now.description': 'Ingeniero de Software IA en Mercado Libre',

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
    'portfolio.description':
      'Proyectos, clones y experimentos de Andrés Plaza — filtra por stack y rol.',
    'portfolio.heading': 'Proyectos y experimentos',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.empty': 'Ningún proyecto coincide con este filtro.',
    'portfolio.filter.results': '{count} proyectos',
    'portfolio.repo': 'Repositorio disponible',
    'portfolio.live': 'Ver sitio en vivo',
    'portfolio.repository': 'Ver código fuente',
    'portfolio.noLinks': 'Sin enlaces disponibles aún.',
    'portfolio.backToAll': 'Volver a todos los proyectos',

    // Work Page
    'work.title': 'Trabajo',
    'work.description':
      'Experiencia profesional de Andrés Plaza como ingeniero Full Stack + IA en equipos de producto y plataformas.',

    // 404 Page
    '404.title': '404 - No encontrado',
    '404.description': 'Error 404 — esta página no fue encontrada',
    '404.heading': 'Página no encontrada',
    '404.message': 'Lo sentimos, no pudimos encontrar la página que buscas.',
    '404.goHome': 'Volver al inicio',

    // Home Page
    'home.title': 'Andrés Plaza - Desarrollador Full Stack + IA',
    'home.description':
      'Andrés Plaza (Bue221) — Desarrollador Full Stack + IA de Colombia. React/Next.js, Python, Go, LangChain y plataformas de agentes de IA. Portafolio, experiencia y proyectos.',
    'home.portfolio': 'Portafolio y Proyectos',

    // AI toolkit
    'ai.title': 'Flujo de trabajo con IA',
    'ai.description':
      'Trato la IA como parte del stack de ingeniería: agentes, herramientas y contexto para entregar más rápido sin bajar la calidad.',
    'ai.footer': 'Criterio humano en el loop',
    'ai.tools.cursor':
      'IDE diario para refactors multi-archivo, reviews e iteración de diseño.',
    'ai.tools.claude':
      'Sesiones profundas de código, razonamiento con mucho contexto y edits cuidadosos.',
    'ai.tools.codex':
      'Tareas autónomas, exploración de repos y experimentos en paralelo.',
    'ai.tools.mcp':
      'Model Context Protocol para conectar editores con herramientas reales del proyecto.',
    'ai.tools.skills':
      'Skills reutilizables que definen cómo quiero que trabajen los agentes.',
    'ai.tools.context':
      'Ingeniería de contexto para respuestas ancladas al código.',

    // Terminal Card
    'terminal.cardTitle': 'bue221 — portfolio.sh',
    'terminal.placeholder': 'escribe un comando…',
    'terminal.greeting': '👋  ¡Bienvenido al terminal interactivo!',
    'terminal.helpHint': '  Escribe "help" para ver los comandos disponibles.',
    'terminal.helpIntro': 'Comandos disponibles:',
    'terminal.helpDesc': 'Mostrar este mensaje de ayuda',
    'terminal.whoamiDesc': 'Sobre mí',
    'terminal.whoamiLocation': 'Bogotá, Colombia 🇨🇴',
    'terminal.whoamiRole': 'Ingeniero de Software IA @ Mercado Libre',
    'terminal.whoamiHobby': 'Guitarra · Ukulele · Tatuajes · Fútbol',
    'terminal.skillsDesc': 'Mi stack tecnológico',
    'terminal.contactDesc': 'Contacto y redes sociales',
    'terminal.clearDesc': 'Limpiar el terminal',
    'terminal.notFound':
      'Comando "{cmd}" no encontrado. Escribe "help" para opciones.',
    'terminal.suggest': 'Comandos sugeridos',

    // Available for work
    'available.title': 'Disponible para trabajar',
    'available.description':
      'Abierto a proyectos nuevos, trabajo freelance o roles full-time. Construyamos algo genial juntos.',
    'available.cta': 'Contáctame',

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
    'experience.mercadolibre.position': 'Ingeniero de Software IA',
    'experience.mercadolibre.location': 'Bogotá D C, Colombia',
    'experience.mercadolibre.tasks.0':
      'Desarrollé la plataforma de evals que etiqueta y clasifica más de 10.000 conversaciones diarias de 10 agentes de IA usados por People, atención al cliente y vendedores',
    'experience.mercadolibre.tasks.1':
      'Implementé tableros de observabilidad en DataDog que reducen el tiempo de respuesta ante caídas en la generación de tags y conversaciones sin clasificar',
    'experience.mercadolibre.tasks.2':
      'Construí Web Components reutilizados en los micro frontends de 3 aplicaciones de forma simultánea',
    'experience.mercadolibre.tasks.3':
      'Desarrollé el backoffice de roles y permisos y módulos del conversation explorer con SDD y BDD, incorporando agentes y skills de IA en el flujo de desarrollo',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Líder Técnico Frontend',
    'experience.straico.location': 'Freelance · Bogotá, Colombia',
    'experience.straico.tasks.0':
      'Lideré técnicamente y mentoreé a 3 desarrolladores junior, definiendo arquitectura y buenas prácticas',
    'experience.straico.tasks.1':
      'Optimicé el frontend del chat en tiempo real (re-renders y memoización), eliminando el alto consumo de CPU del navegador con la pestaña abierta',
    'experience.straico.tasks.2':
      'Unifiqué múltiples modelos de IA mediante OpenRouter e integré generación de imágenes y texto a voz',
    'experience.straico.tasks.3':
      'Optimicé las consultas de la base de datos MongoDB mediante índices',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Senior Frontend Developer & AI Specialist',
    'experience.spot2.location': 'Ciudad de México, México',
    'experience.spot2.tasks.0':
      'Desarrollé un chatbot con IA (Python, LangChain) que aumentó la captación de leads en 110%',
    'experience.spot2.tasks.1':
      'Reduje entre 40% y 50% los errores de re-renderizado de la vista de mapa y en 90% las requests duplicadas',
    'experience.spot2.tasks.2':
      'Diseñé una arquitectura de HOC por filtro y migré el estado de React state a Zustand, mejorando el flujo de desarrollo del equipo',
    'experience.spot2.tasks.3':
      'Construí microservicios con CI/CD en GitHub Actions y despliegues en AWS (Lambda, SQS, SNS); mentoreé al equipo de IA en LangChain, LangGraph, LangSmith y Pytest',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Desarrollador Frontend',
    'experience.imaginamos.location': 'Bogotá D C, Colombia',
    'experience.imaginamos.tasks.0':
      'Desarrollé de principio a fin el CMS de Brilla para el cliente ETB',
    'experience.imaginamos.tasks.1':
      'Implementé flujos comerciales de ETB, incluyendo formularios complejos, y la interfaz de Yustii',
    'experience.imaginamos.tasks.2':
      'Entregué funcionalidades en React, Next.js y Angular con TypeScript en distintas superficies de producto',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Desarrollador Frontend',
    'experience.inetum.location': 'Bogotá D C, Colombia',
    'experience.inetum.tasks.0':
      'Desarrollé funcionalidades para proyectos de Claro con React y Angular bajo SCRUM',
    'experience.inetum.tasks.1':
      'Implementé Redux Toolkit para la gestión de estado y apoyé QA y debugging',
    'experience.inetum.tasks.2':
      'Colaboré en entregas ágiles multidisciplinares para producto telecom',

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
      'Olá, sou <b>Andrés Camilo Plaza</b>, desenvolvedor Full Stack + IA com mais de 4 anos de experiência. Domínio sólido de React/Next.js e TypeScript, além de backend em Python e Go. Construo plataformas de agentes de IA, UIs de produto e interfaces polidas — e também sou artista de tatuagem sempre em busca de novos desafios.',
    'intro.sr.github': 'Perfil do GitHub',
    'intro.sr.linkedin': 'Perfil do Linkedin',
    'intro.sr.email': 'Contato por e-mail',

    // About Me
    'about.title': 'Sobre mim',
    'about.description':
      'Olá, sou Andrés, desenvolvedor Full Stack + IA da Colômbia 🇨🇴 com mais de 4 anos construindo UIs de produto e sistemas com IA.',
    'about.tools': 'Meu stack preferido inclui:',
    'about.hobbies':
      'Além da programação, sou apaixonado por tatuagens, futebol e viagens. Um hobby incomum meu é tocar música clássica no violão ou ukulele.',

    // Now Card
    'now.title': 'Agora',
    'now.whatsThat': 'o que é isso?',
    'now.description': 'Engenheiro de Software IA no Mercado Livre',

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
    'portfolio.description':
      'Projetos, clones e experimentos de Andrés Plaza — filtre por stack e papel.',
    'portfolio.heading': 'Projetos e experimentos',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.empty': 'Nenhum projeto corresponde a este filtro.',
    'portfolio.filter.results': '{count} projetos',
    'portfolio.repo': 'Repositório disponível',
    'portfolio.live': 'Ver site ao vivo',
    'portfolio.repository': 'Ver código fonte',
    'portfolio.noLinks': 'Sem links disponíveis ainda.',
    'portfolio.backToAll': 'Voltar a todos os projetos',

    // Work Page
    'work.title': 'Trabalho',
    'work.description':
      'Experiência profissional de Andrés Plaza como engenheiro Full Stack + IA em times de produto e plataformas.',

    // 404 Page
    '404.title': '404 - Não encontrado',
    '404.description': 'Erro 404 — esta página não foi encontrada',
    '404.heading': 'Página não encontrada',
    '404.message':
      'Desculpe, não conseguimos encontrar a página que você está procurando.',
    '404.goHome': 'Voltar ao início',

    // Home Page
    'home.title': 'Andrés Plaza - Desenvolvedor Full Stack + IA',
    'home.description':
      'Andrés Plaza (Bue221) — Desenvolvedor Full Stack + IA da Colômbia. React/Next.js, Python, Go, LangChain e plataformas de agentes de IA. Portfólio, experiência e projetos.',
    'home.portfolio': 'Portfólio e Projetos',

    // AI toolkit
    'ai.title': 'Fluxo de trabalho com IA',
    'ai.description':
      'Trato a IA como parte do stack de engenharia: agentes, ferramentas e contexto para entregar mais rápido sem baixar a qualidade.',
    'ai.footer': 'Julgamento humano no loop',
    'ai.tools.cursor':
      'IDE diário para refactors multiarquivo, reviews e iteração de design.',
    'ai.tools.claude':
      'Sessões profundas de código, raciocínio com muito contexto e edits cuidadosos.',
    'ai.tools.codex':
      'Tarefas autônomas, exploração de repos e experimentos em paralelo.',
    'ai.tools.mcp':
      'Model Context Protocol para conectar editores com ferramentas reais do projeto.',
    'ai.tools.skills':
      'Skills reutilizáveis que definem como quero que os agentes trabalhem.',
    'ai.tools.context':
      'Engenharia de contexto para respostas ancoradas no código.',

    // Terminal Card
    'terminal.cardTitle': 'bue221 — portfolio.sh',
    'terminal.placeholder': 'digite um comando…',
    'terminal.greeting': '👋  Bem-vindo ao terminal interativo!',
    'terminal.helpHint': '  Digite "help" para ver os comandos disponíveis.',
    'terminal.helpIntro': 'Comandos disponíveis:',
    'terminal.helpDesc': 'Mostrar esta mensagem de ajuda',
    'terminal.whoamiDesc': 'Sobre mim',
    'terminal.whoamiLocation': 'Bogotá, Colômbia 🇨🇴',
    'terminal.whoamiRole': 'Engenheiro de Software IA @ Mercado Livre',
    'terminal.whoamiHobby': 'Violão · Ukulele · Tatuagem · Futebol',
    'terminal.skillsDesc': 'Meu stack tecnológico',
    'terminal.contactDesc': 'Contato e redes sociais',
    'terminal.clearDesc': 'Limpar o terminal',
    'terminal.notFound':
      'Comando "{cmd}" não encontrado. Digite "help" para opções.',
    'terminal.suggest': 'Comandos sugeridos',

    // Available for work
    'available.title': 'Disponível para trabalhar',
    'available.description':
      'Aberto a novos projetos, trabalho freelance ou cargos full-time. Vamos construir algo incrível juntos.',
    'available.cta': 'Entre em contato',

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
    'experience.mercadolibre.position': 'Engenheiro de Software IA',
    'experience.mercadolibre.location': 'Bogotá D C, Colômbia',
    'experience.mercadolibre.tasks.0':
      'Desenvolvi a plataforma de evals que rotula e classifica mais de 10.000 conversas diárias de 10 agentes de IA usados por People, atendimento e vendedores',
    'experience.mercadolibre.tasks.1':
      'Implementei dashboards de observabilidade no DataDog que reduzem o tempo de resposta a falhas na geração de tags e conversas sem classificação',
    'experience.mercadolibre.tasks.2':
      'Construí Web Components reutilizados nos micro frontends de 3 aplicações ao mesmo tempo',
    'experience.mercadolibre.tasks.3':
      'Desenvolvi o backoffice de papéis e permissões e módulos do conversation explorer com SDD/BDD, incorporando agentes e skills de IA no fluxo de entrega',

    // Experience - Straico
    'experience.straico.company': 'Straico',
    'experience.straico.position': 'Líder Técnico Frontend',
    'experience.straico.location': 'Freelance · Bogotá, Colômbia',
    'experience.straico.tasks.0':
      'Liderança técnica e mentoria de 3 desenvolvedores júnior, definindo arquitetura e boas práticas',
    'experience.straico.tasks.1':
      'Otimizei o frontend do chat em tempo real (re-renders e memoização), eliminando o alto consumo de CPU do navegador com a aba aberta',
    'experience.straico.tasks.2':
      'Unifiquei múltiplos modelos de IA via OpenRouter e integrei geração de imagens e texto para fala',
    'experience.straico.tasks.3':
      'Otimizei consultas MongoDB com índices',

    // Experience - Spot2
    'experience.spot2.company': 'Spot2',
    'experience.spot2.position': 'Senior Frontend Developer & AI Specialist',
    'experience.spot2.location': 'Cidade do México, México',
    'experience.spot2.tasks.0':
      'Desenvolvi um chatbot com IA (Python, LangChain) que aumentou a captação de leads em 110%',
    'experience.spot2.tasks.1':
      'Reduzi entre 40% e 50% os erros de re-render da vista de mapa e em 90% as requests duplicadas',
    'experience.spot2.tasks.2':
      'Desenhei uma arquitetura de HOC por filtro e migrei o estado de React state para Zustand, melhorando o fluxo de desenvolvimento do time',
    'experience.spot2.tasks.3':
      'Construí microserviços com CI/CD no GitHub Actions e deploys na AWS (Lambda, SQS, SNS); mentoreei o time de IA em LangChain, LangGraph, LangSmith e Pytest',

    // Experience - Imaginamos
    'experience.imaginamos.company': 'Imaginamos',
    'experience.imaginamos.position': 'Desenvolvedor Frontend',
    'experience.imaginamos.location': 'Bogotá D C, Colômbia',
    'experience.imaginamos.tasks.0':
      'Desenvolvi do início ao fim o CMS da Brilla para o cliente ETB',
    'experience.imaginamos.tasks.1':
      'Implementei fluxos comerciais da ETB, incluindo formulários complexos, e a interface da Yustii',
    'experience.imaginamos.tasks.2':
      'Entreguei funcionalidades em React, Next.js e Angular com TypeScript em diferentes superfícies de produto',

    // Experience - INETUM
    'experience.inetum.company': 'INETUM',
    'experience.inetum.position': 'Desenvolvedor Frontend',
    'experience.inetum.location': 'Bogotá D C, Colômbia',
    'experience.inetum.tasks.0':
      'Desenvolvi funcionalidades para projetos da Claro com React e Angular sob SCRUM',
    'experience.inetum.tasks.1':
      'Implementei Redux Toolkit para gerenciamento de estado e apoiei QA e debugging',
    'experience.inetum.tasks.2':
      'Colaborei em entregas ágeis multidisciplinares para produto telecom',

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

/** The canonical translation shape — derived from the default (English) locale. */
export type Translations = (typeof ui)[typeof defaultLang]

/**
 * Type-level assertion: every non-default locale must implement ALL keys that
 * the default locale exposes. TypeScript will surface a compile error at this
 * line if any key is missing or mis-spelled in `es` or `pt`.
 *
 * We use a mapped type trick: `Record<keyof Translations, string>` and then
 * check assignability without widening the `ui` object.
 */
type AssertCompleteLocale<T extends Record<keyof Translations, string>> = T

// These type aliases will cause a TS error if any locale is missing a key:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _CheckEs = AssertCompleteLocale<(typeof ui)['es']>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _CheckPt = AssertCompleteLocale<(typeof ui)['pt']>

/** Strongly-typed translation key. Use this instead of plain `string` when
 *  building helper utilities that accept translation keys. */
export type TranslationKey = keyof Translations
