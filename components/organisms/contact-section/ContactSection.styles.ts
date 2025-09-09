export const getContactSectionStyles = () => {
  return {
    container: "py-20 bg-bg-secondary transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    grid: "grid grid-cols-1 lg:grid-cols-2 gap-12",
    textContent: "space-y-6",
    title:
      "text-3xl md:text-4xl font-bold text-text-primary transition-colors duration-300",
    subtitle: "text-lg text-text-secondary transition-colors duration-300",
    description:
      "text-text-secondary leading-relaxed transition-colors duration-300",
    contactInfo: "space-y-4",
    contactItem: "flex items-center space-x-3",
    contactIcon: "w-5 h-5 text-accent-primary",
    contactText: "text-text-primary transition-colors duration-300",
    socialLinks: "mt-8",
    formContainer:
      "bg-card-bg p-8 rounded-lg shadow-lg border border-card-border transition-colors duration-300",
  };
};
