import { Project } from "@/types/data";

// Função para obter projeto traduzido
export const getTranslatedProject = (
  project: Project,
  t: (key: string) => string
): Project => {
  const projectKeyMap: Record<string, string> = {
    "1": "toyotaBrasil",
    "2": "tmdbMovies",
    "3": "toyotaArgentina",
    "4": "toyotaVenezuela",
    "5": "kintoBrasil",
    "6": "kintoArgentina",
    "7": "alright",
    "8": "cruzVermelha",
    "9": "descarteCerto",
  };

  const key = projectKeyMap[project.id];
  if (key) {
    return {
      ...project,
      title: t(`data.projects.titles.${key}`),
      description: t(`data.projects.descriptions.${key}`),
      longDescription:
        t(`data.projects.longDescriptions.${key}`) || project.longDescription,
    };
  }

  return project;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portal Toyota Brasil",
    description:
      "Portal institucional da Toyota Brasil com interface moderna e responsiva",
    longDescription:
      "Desenvolvimento de páginas e componentes para o portal oficial da Toyota Brasil, focando em performance, acessibilidade e experiência do usuário.",
    image: "/images/projets/Toyota-br.png",
    // video: "https://res.cloudinary.com/seu-cloud/video/upload/v123/toyota-demo.mp4", // Exemplo: adicione a URL do vídeo aqui
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SASS",
      "GraphQL",
      "PostgreSQL",
      "Auth0",
      "Figma",
      "Jira",
      "GitHub",
      "Git Actions",
    ],
    liveUrl: "https://www.toyota.com.br/",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "TMDB Movies",
    description:
      "Aplicação React completa para explorar filmes populares, buscar conteúdos, visualizar detalhes e gerenciar listas de favoritos. Inclui infinite scroll, filtros avançados, ordenação personalizada e integração completa com a API do The Movie Database (TMDB).",
    longDescription:
      "Sistema completo de filmes desenvolvido com React e TypeScript que permite aos usuários explorar filmes populares, buscar conteúdos, visualizar detalhes e gerenciar uma lista personalizada de favoritos. Implementa roteamento com React Router, gerenciamento de estado global com Context API, consumo da API REST do TMDB, tratamento de erros e estados de loading, infinite scroll, filtros e ordenação. Totalmente responsivo e com testes unitários.",
    image: "/images/projets/tmdb-image.png",
    video: "/videos/tmdb-movies.mp4",
    technologies: [
      "React 18+",
      "TypeScript",
      "React Router",
      "Context API",
      "Axios",
      "CSS Modules",
      "Jest",
      "React Testing Library",
      "TMDB API",
    ],
    githubUrl: "https://github.com/alinenecchi/adnr-tech-portfolio",
    liveUrl: "https://adnr-tmdb-movies.vercel.app/",
    featured: false,
    category: "web",
  },
  {
    id: "3",
    title: "Portal Toyota Argentina",
    description: "Site institucional da Toyota Argentina com design responsivo",
    longDescription:
      "Contribuição no desenvolvimento do portal da Toyota Argentina, mantendo consistência visual e funcional com os padrões internacionais da marca.",
    image: "/images/projets/toyota-ar.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SASS",
      "GraphQL",
      "PostgreSQL",
      "Auth0",
      "Figma",
      "Jira",
      "GitHub",
      "Git Actions",
    ],
    liveUrl: "https://www.toyota.com.ar/",
    featured: true,
    category: "web",
  },
  {
    id: "4",
    title: "Portal Toyota Venezuela",
    description: "Website oficial da Toyota Venezuela",
    longDescription:
      "Desenvolvimento e manutenção do site institucional da Toyota Venezuela, adaptado para o mercado local com foco na experiência do usuário.",
    image: "/images/projets/toyota-ve.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SASS",
      "GraphQL",
      "PostgreSQL",
      "Auth0",
      "Figma",
      "Jira",
      "GitHub",
      "Git Actions",
    ],
    liveUrl: "https://www.toyota.com.ve/",
    featured: false,
    category: "web",
  },
  {
    id: "5",
    title: "Kinto Mobility Brasil",
    description: "Plataforma de mobilidade urbana da Kinto no Brasil",
    longDescription:
      "Desenvolvimento da plataforma digital da Kinto Mobility Brasil, serviço de mobilidade urbana da Toyota, com foco em soluções sustentáveis de transporte.",
    image: "/images/projets/kinto-mobility-br.png",
    technologies: ["React", "TypeScript", "Node.js", "SASS"],
    liveUrl: "https://kintomobility.com.br/",
    featured: true,
    category: "web",
  },
  {
    id: "6",
    title: "Kinto Mobility Argentina - Contato",
    description: "Página de contato da Kinto Mobility Argentina",
    longDescription:
      "Desenvolvimento da página de contato e formulários interativos para a Kinto Mobility Argentina, otimizada para conversão e experiência do usuário.",
    image: "/images/projets/kinto-ar.png",
    technologies: ["React", "TypeScript", "Node.js", "SASS"],
    liveUrl: "https://www.kinto-mobility.com.ar/contactanos",
    featured: false,
    category: "web",
  },
  {
    id: "7",
    title: "Alright - Consultoria Digital",
    description: "Website da Alright, consultoria em transformação digital",
    longDescription:
      "Desenvolvimento do site institucional da Alright, consultoria especializada em transformação digital e soluções tecnológicas para empresas.",
    image: "/images/projets/alright.png",
    technologies: ["React", "TypeScript", "Node.js", "SASS"],
    liveUrl: "https://alright.com.br/",
    featured: true,
    category: "web",
  },
  {
    id: "8",
    title: "Cruz Vermelha - Cobertura Humanitária",
    description: "Plataforma de cobertura humanitária da Cruz Vermelha",
    longDescription:
      "Desenvolvimento da plataforma digital para cobertura humanitária da Cruz Vermelha, facilitando o acesso a informações e recursos para comunidades em situação de vulnerabilidade.",
    image: "/images/projets/cobertura-humanitaria.png",
    technologies: ["PHP", "WordPress", "CSS", "JavaScript", "Plugins"],
    liveUrl: "https://www.coberturahumanitaria.com.br/",
    featured: true,
    category: "web",
  },
  {
    id: "9",
    title: "Descarte Certo",
    description:
      "Meu primeiro projeto como desenvolvedora - o início da minha jornada na tecnologia. Projeto social focado em sustentabilidade e descarte consciente de materiais.",
    longDescription:
      "Este foi meu primeiro projeto como desenvolvedora, marcando o início da minha jornada na tecnologia. Projeto social da Aceleradora Ágil focado em sustentabilidade, onde aprendi os fundamentos do desenvolvimento web. Integração com APIs de geolocalização, formulários complexos e mapas interativos para facilitar o descarte consciente de materiais. Uma experiência transformadora que definiu minha paixão pela programação.",
    image:
      "https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHJlY3ljbGluZyUyMGFwcHxlbnwxfHx8fDE3NTczNjYxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "CSS", "Java", "Spring Boot"],
    githubUrl: "https://github.com/aceleradora-TW/descarte-certo",
    featured: false,
    category: "web",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const webProjects = projects.filter(
  (project) => project.category === "web"
);
export const mobileProjects = projects.filter(
  (project) => project.category === "mobile"
);
