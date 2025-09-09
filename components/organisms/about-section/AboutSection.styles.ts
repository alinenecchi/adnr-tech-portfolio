export const getAboutSectionStyles = () => {
  return {
    container: "py-20 bg-bg-primary transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
    textContent: "space-y-6",
    title:
      "text-3xl md:text-4xl font-bold text-text-primary transition-colors duration-300",
    description:
      "text-lg text-text-secondary leading-relaxed transition-colors duration-300",
    highlight: "text-accent-primary font-semibold",
    imageContainer: "relative",
    image: "rounded-lg shadow-lg",
    stats: "grid grid-cols-2 gap-6 mt-8",
    stat: "text-center",
    statNumber: "text-2xl font-bold text-accent-primary",
    statLabel:
      "text-sm text-text-secondary mt-1 transition-colors duration-300",
  };
};
