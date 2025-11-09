# Portfolio Aline Ribeiro

Um portfólio moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS, seguindo os princípios do Atomic Design.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Atomic Design** - Metodologia de design de componentes
- **React** - Biblioteca para interfaces de usuário

## 📁 Estrutura do Projeto

```
portfolio-aline/
├── app/                  # Roteamento Next.js App Router
│   ├── page.tsx          # Página inicial
│   ├── about/            # Página "Sobre Mim"
│   ├── projects/         # Página "Projetos"
│   ├── contact/          # Página "Contato"
│   └── globals.css       # Estilos globais
├── components/           # Componentes reutilizáveis
│   ├── atoms/            # Componentes atômicos
│   ├── molecules/        # Componentes moleculares
│   ├── organisms/        # Componentes organismos
│   └── icons/            # Ícones SVG
├── lib/                  # Utilitários e dados
│   ├── data/             # Dados estáticos
│   ├── utils.ts          # Funções utilitárias
│   └── email.ts          # Serviço de email
├── types/                # Tipos TypeScript
└── public/               # Arquivos estáticos
```

## 🎨 Componentes

### Atoms (Átomos)

- **Button** - Botão reutilizável com variantes
- **Title** - Títulos com diferentes níveis
- **Text** - Texto com variantes
- **Image** - Imagem otimizada com Next.js
- **Divider** - Divisor visual

### Molecules (Moléculas)

- **Navigation** - Navegação do site
- **SocialLinks** - Links para redes sociais
- **ProjectCard** - Card de projeto
- **ContactForm** - Formulário de contato

### Organisms (Organismos)

- **Header** - Cabeçalho do site
- **HeroSection** - Seção hero da página inicial
- **AboutSection** - Seção sobre mim
- **ProjectsSection** - Seção de projetos
- **SkillsSection** - Seção de habilidades
- **ContactSection** - Seção de contato
- **Footer** - Rodapé do site

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd adnr-tech-portfolio
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a versão de produção
- `npm run start` - Executa a versão de produção
- `npm run lint` - Executa o linter ESLint

## 🎯 Funcionalidades

- ✅ Design responsivo
- ✅ Navegação suave entre seções
- ✅ Formulário de contato funcional
- ✅ Galeria de projetos
- ✅ Seção de habilidades técnicas
- ✅ Modo escuro (preparado)
- ✅ SEO otimizado
- ✅ Performance otimizada

## 📱 Páginas

- **Início** (`/`) - Página principal com todas as seções
- **Sobre** (`/about`) - Informações detalhadas sobre mim
- **Projetos** (`/projects`) - Galeria de projetos com filtros
- **Contato** (`/contact`) - Formulário de contato e informações

## 🎨 Personalização

Para personalizar o portfólio com suas informações:

1. **Dados pessoais**: Edite os arquivos em `lib/data/`
2. **Cores**: Modifique as variáveis CSS em `app/globals.css`
3. **Componentes**: Ajuste os estilos nos arquivos `.styles.ts`
4. **Conteúdo**: Atualize os textos nos componentes

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

- **Email**: aline@example.com
- **LinkedIn**: [linkedin.com/in/aline-rodrigues](https://linkedin.com/in/aline-rodrigues)
- **GitHub**: [github.com/aline](https://github.com/aline)

---

Desenvolvido com ❤️ por Aline Rodrigues
