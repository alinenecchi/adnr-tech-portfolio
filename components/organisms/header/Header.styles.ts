export const getHeaderStyles = () => {
  return {
    container:
      "bg-nav-bg shadow-sm border-b border-nav-border sticky top-0 z-50 transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    wrapper: "flex items-center justify-between h-16",
    logo: "text-xl font-bold text-text-primary transition-colors duration-300",
    navigation: "hidden md:flex items-center space-x-8",
    mobileMenuButton:
      "md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors duration-300",
    mobileMenu:
      "md:hidden absolute top-16 left-0 right-0 bg-nav-bg border-b border-nav-border shadow-lg transition-colors duration-300",
    mobileNavigation: "px-4 py-2 space-y-1",
  };
};
