export const getHeroSectionStyles = () => {
  return {
    container:
      "relative min-h-screen flex items-center bg-bg-primary transition-colors duration-300",
    content:
      "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
    textContent: "space-y-8",
    title:
      "text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight transition-colors duration-300",
    subtitle:
      "text-xl md:text-2xl text-accent-primary font-semibold transition-colors duration-300",
    description:
      "text-lg text-text-secondary leading-relaxed max-w-lg transition-colors duration-300",
    buttons: "flex flex-col sm:flex-row gap-4",
    primaryButton: "px-8 py-4 text-lg",
    secondaryButton: "px-8 py-4 text-lg",
    imageContent: "flex justify-center lg:justify-end",
    imageContainer: "relative w-full max-w-md",
    placeholderImage: "w-full h-96 rounded-2xl overflow-hidden shadow-2xl",
    backgroundPattern: "absolute inset-0 opacity-10",
    floatingElements: "absolute inset-0 overflow-hidden pointer-events-none",
  };
};
