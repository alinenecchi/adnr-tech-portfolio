export const getFooterStyles = () => {
  return {
    container: "bg-footer-bg text-footer-text transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
    section: "space-y-4",
    title: "text-lg font-semibold mb-4 text-text-primary",
    description: "text-text-secondary leading-relaxed",
    links: "space-y-2",
    link: "text-text-secondary hover:text-text-primary transition-colors duration-200",
    socialLinks: "flex space-x-4",
    bottom: "border-t border-border mt-8 pt-8 text-center text-text-secondary",
    year: "text-sm",
  };
};
