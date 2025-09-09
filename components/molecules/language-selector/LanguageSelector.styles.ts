export const getLanguageSelectorStyles = () => {
  return {
    container: "relative inline-block w-full lg:w-auto",
    button:
      "flex items-center space-x-2 px-3 py-2 rounded-lg border border-border bg-card-bg hover:bg-bg-secondary transition-colors duration-200 w-full lg:w-auto",
    flag: "text-lg",
    language:
      "text-sm font-medium text-text-primary transition-colors duration-300",
    icon: "w-4 h-4",
    dropdown:
      "absolute right-0 mt-2 w-48 bg-card-bg rounded-lg shadow-lg border border-card-border z-[100] transition-colors duration-300 max-h-80 overflow-y-auto",
    mobileDropdown:
      "relative mt-2 bg-card-bg rounded-lg shadow-lg border border-card-border z-[100] transition-all duration-300 transform scale-y-0 origin-top lg:hidden opacity-0",
    mobileDropdownOpen: "scale-y-100 opacity-100",
    dropdownHeader: "px-4 py-3 border-b border-border",
    dropdownTitle:
      "text-sm font-medium text-text-primary transition-colors duration-300",
    dropdownContent: "p-2",
    mobileDropdownContent: "p-4",
    languageOption:
      "flex items-center space-x-3 p-3 rounded-lg hover:bg-bg-secondary cursor-pointer transition-colors duration-200",
    selected: "bg-accent-primary/10 border-accent-primary/20",
    selectedIcon: "w-4 h-4 text-accent-primary",
  };
};
