export const getPersonalProjectsStyles = () => ({
  container: "py-20 px-4 max-w-7xl mx-auto",
  content: "space-y-16",
  
  header: "text-center space-y-6",
  title: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
  subtitle: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
  
  carousel: "relative overflow-hidden",
  carouselTrack: "flex transition-transform duration-500 ease-in-out",
  carouselItem: "flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4",
  
  projectCard: `
    group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl 
    transition-all duration-500 transform hover:-translate-y-2 overflow-hidden
    border border-gray-200 dark:border-gray-700
  `,
  
  projectImage: `
    relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 
    dark:from-gray-700 dark:to-gray-800
  `,
  projectImageOverlay: `
    absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
  `,
  projectImageContent: `
    absolute bottom-4 left-4 right-4 text-white transform translate-y-4 
    group-hover:translate-y-0 transition-transform duration-300
  `,
  
  projectContent: "p-6 space-y-4",
  projectTitle: "text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
  projectDescription: "text-gray-600 dark:text-gray-300 text-sm leading-relaxed",
  projectTechnologies: "flex flex-wrap gap-2",
  technologyTag: `
    px-3 py-1 text-xs font-medium rounded-full 
    bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200
    transition-colors duration-200
  `,
  
  projectActions: `
    flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
  `,
  actionButton: `
    flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
    flex items-center justify-center gap-2
  `,
  primaryButton: `
    bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl
    transform hover:scale-105
  `,
  secondaryButton: `
    bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 
    text-gray-700 dark:text-gray-300
  `,
  
  navigation: "flex justify-center items-center gap-4 mt-8",
  navButton: `
    w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl
    flex items-center justify-center transition-all duration-200
    border border-gray-200 dark:border-gray-700
    hover:bg-blue-50 dark:hover:bg-blue-900/20
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  navDots: "flex gap-2",
  dot: `
    w-3 h-3 rounded-full transition-all duration-200 cursor-pointer
    bg-gray-300 dark:bg-gray-600 hover:bg-blue-500
  `,
  activeDot: "bg-blue-600 dark:bg-blue-400 scale-125",
  
  categoryFilter: "flex justify-center gap-4 mb-8",
  filterButton: `
    px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
    border border-gray-300 dark:border-gray-600
    hover:bg-blue-50 dark:hover:bg-blue-900/20
  `,
  activeFilter: "bg-blue-600 text-white border-blue-600 shadow-lg",
  
  stats: `
    grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 p-6 rounded-2xl
    bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700
    border border-gray-200 dark:border-gray-600
  `,
  statItem: "text-center space-y-2",
  statNumber: "text-3xl font-bold text-blue-600 dark:text-blue-400",
  statLabel: "text-gray-600 dark:text-gray-300 text-sm font-medium",
});
