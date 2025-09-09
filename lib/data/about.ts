import { AboutData, Experience, Education, Certification } from "@/types/data";

export const aboutData: AboutData = {
  name: "Aline Dias Necchi Ribeiro",
  title: "Desenvolvedora Full Stack",
  bio: "Desenvolvedora apaixonada por tecnologia e inovação, especializada em React, Node.js e desenvolvimento de aplicações web modernas.",
  longBio: `Sou uma desenvolvedora full stack com mais de 3 anos de experiência em desenvolvimento de aplicações web e mobile. 
  
  Minha paixão pela tecnologia começou durante a faculdade de Ciência da Computação, onde descobri o poder de transformar ideias em soluções digitais funcionais.
  
  Especializo-me em tecnologias modernas como React, Next.js, TypeScript e Node.js, sempre buscando as melhores práticas e padrões de desenvolvimento. Tenho experiência em desenvolvimento de aplicações escaláveis, APIs RESTful e integração com bancos de dados.
  
  Além do desenvolvimento, tenho interesse em UX/UI Design e sempre busco criar experiências digitais que sejam tanto funcionais quanto visualmente atraentes.
  
  Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, contribuindo para projetos inovadores que façam a diferença.`,
  image: "/images/profile.jpg",
  location: "São Paulo, SP - Brasil",
  email: "alinencchi@gmail.com",
  phone: "+55 (51) 99340-9405",
  resumeUrl: "/docs/CV- ALINE - 2025.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/alinenecchi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aline-necchi/",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aline_dev",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:alinencchi@gmail.com",
      icon: "email",
    },
  ],
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Solutions",
    position: "Desenvolvedora Full Stack Sênior",
    startDate: "2022-01",
    endDate: "2024-01",
    description:
      "Desenvolvimento de aplicações web e mobile, liderança técnica de equipes e arquitetura de sistemas escaláveis.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    current: false,
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Desenvolvedora Frontend",
    startDate: "2021-03",
    endDate: "2021-12",
    description:
      "Desenvolvimento de interfaces de usuário responsivas e otimização de performance de aplicações React.",
    technologies: ["React", "JavaScript", "CSS3", "Figma"],
    current: false,
  },
  {
    id: "3",
    company: "Freelancer",
    position: "Desenvolvedora Web",
    startDate: "2020-06",
    endDate: "2021-02",
    description:
      "Desenvolvimento de sites e aplicações web para clientes diversos, desde landing pages até sistemas completos.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Universidade de São Paulo",
    degree: "Bacharelado",
    field: "Ciência da Computação",
    startDate: "2018",
    endDate: "2022",
    description:
      "Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.",
    current: false,
  },
  {
    id: "2",
    institution: "Rocketseat",
    degree: "Certificação",
    field: "Desenvolvimento Full Stack",
    startDate: "2021",
    endDate: "2021",
    description:
      "Bootcamp intensivo focado em React, Node.js e desenvolvimento de aplicações modernas.",
    current: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023-06",
    credentialId: "AWS-DEV-123456",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "2",
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022-09",
    credentialId: "META-REACT-789012",
    credentialUrl: "https://meta.com/certifications",
  },
  {
    id: "3",
    name: "TypeScript Fundamentals",
    issuer: "Microsoft",
    date: "2022-03",
    credentialId: "MS-TS-345678",
    credentialUrl: "https://microsoft.com/learn",
  },
];
