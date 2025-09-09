export const getLogoShowcaseStyles = () => {
  return {
    container: "py-12 bg-bg-secondary transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    title:
      "text-3xl font-bold text-text-primary mb-8 text-center transition-colors duration-300",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    card: "bg-card-bg p-6 rounded-lg shadow-md text-center border border-card-border transition-colors duration-300",
    cardTitle:
      "text-lg font-semibold text-text-primary mb-4 transition-colors duration-300",
    logoContainer: "flex justify-center items-center mb-4",
    description: "text-sm text-text-secondary transition-colors duration-300",
  };
};
