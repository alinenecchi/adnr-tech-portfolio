export const getPersonalProjectsStyles = () => ({
  container: "py-20 px-4 max-w-7xl mx-auto",
  content: "space-y-16",
  
  header: "text-center space-y-6",
  title: "text-3xl md:text-4xl font-bold",
  subtitle: "text-lg max-w-3xl mx-auto",
  
  carousel: "relative overflow-hidden rounded-2xl",
  carouselTrack: "flex transition-transform duration-500 ease-in-out",
  carouselItem: "flex-shrink-0 w-full px-4",
  
  projectCard: `
    group relative rounded-2xl overflow-hidden
    transition-all duration-500 transform hover:-translate-y-2
  `,
  
  projectImage: "relative h-64 md:h-80 overflow-hidden",
  projectImageOverlay: `
    absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
  `,
  projectImageContent: `
    absolute bottom-6 left-6 right-6 text-white transform translate-y-4 
    group-hover:translate-y-0 transition-transform duration-300
  `,
  
  projectContent: "p-8 space-y-6",
  projectTitle: "text-2xl md:text-3xl font-bold transition-colors",
  projectDescription: "text-base md:text-lg leading-relaxed",
  projectTechnologies: "flex flex-wrap gap-3",
  technologyTag: `
    px-4 py-2 text-sm font-medium rounded-full 
    transition-colors duration-200
  `,
  
  projectActions: "flex gap-4 pt-6",
  actionButton: `
    px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200
    flex items-center justify-center gap-2
  `,
  primaryButton: `
    shadow-lg hover:shadow-xl transform hover:scale-105
  `,
  secondaryButton: `
    border-2 transition-all duration-200
  `,
  
  navigation: "flex justify-center items-center gap-6 mt-12",
  navButton: `
    w-14 h-14 rounded-full shadow-lg hover:shadow-xl
    flex items-center justify-center transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  navDots: "flex gap-3",
  dot: `
    w-4 h-4 rounded-full transition-all duration-200 cursor-pointer
  `,
  activeDot: "scale-125",
  
  categoryFilter: "flex justify-center gap-4 mb-12",
  filterButton: `
    px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
    border-2
  `,
  activeFilter: "shadow-lg",
});
