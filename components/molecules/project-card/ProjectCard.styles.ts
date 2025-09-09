export const getProjectCardStyles = () => {
  return {
    container:
      "bg-card-bg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-card-border hover:transform hover:-translate-y-1",
    imageContainer: "relative h-48 w-full overflow-hidden",
    image:
      "w-full h-full object-cover transition-transform duration-300 hover:scale-105",
    content: "p-6",
    title: "text-xl font-semibold text-text-primary mb-2",
    description: "text-text-secondary mb-4 line-clamp-3",
    technologies: "flex flex-wrap gap-2 mb-4",
    techTag:
      "px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full",
    links: "flex space-x-3",
    link: "inline-flex items-center px-3 py-1.5 text-sm font-medium text-link hover:text-link-hover transition-colors duration-200",
    linkIcon: "w-4 h-4 ml-1",
  };
};
