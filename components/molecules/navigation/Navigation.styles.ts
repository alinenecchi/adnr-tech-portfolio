export const getNavigationStyles = () => {
  return {
    container: "flex items-center space-x-8",
    item: "text-text-secondary hover:text-accent-primary transition-colors duration-200 font-medium",
    activeItem: "text-accent-primary font-semibold",
    mobileContainer: "flex flex-col space-y-4 p-4",
    mobileItem:
      "text-text-secondary hover:text-accent-primary transition-colors duration-200 font-medium py-2",
  };
};
