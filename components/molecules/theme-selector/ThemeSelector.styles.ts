export const getThemeSelectorStyles = () => {
  return {
    container: "relative inline-block",
    button:
      "flex items-center space-x-2 px-3 py-2 rounded-lg border border-border bg-card-bg hover:bg-bg-secondary transition-colors duration-200",
    icon: "w-4 h-4",
    dropdown:
      "absolute right-0 mt-2 w-64 bg-card-bg rounded-lg shadow-lg border border-card-border z-50 transition-colors duration-300",
    dropdownHeader: "px-4 py-3 border-b border-border",
    dropdownTitle:
      "text-sm font-medium text-text-primary transition-colors duration-300",
    dropdownContent: "p-2",
    themeOption:
      "flex items-center space-x-3 p-3 rounded-lg hover:bg-bg-secondary cursor-pointer transition-colors duration-200",
    themePreview: "w-8 h-8 rounded-lg border border-border flex-shrink-0",
    themeInfo: "flex-1",
    themeName:
      "text-sm font-medium text-text-primary transition-colors duration-300",
    themeDescription:
      "text-xs text-text-secondary mt-1 transition-colors duration-300",
    selected: "bg-accent-primary/10 border-accent-primary/20",
    selectedIcon: "w-4 h-4 text-accent-primary",
  };
};
