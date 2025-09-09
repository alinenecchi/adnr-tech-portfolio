export const getSkillsSectionStyles = () => {
  return {
    container: "py-20 bg-bg-primary transition-colors duration-300",
    content: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    header: "text-center mb-16",
    title:
      "text-3xl md:text-4xl font-bold text-text-primary mb-4 transition-colors duration-300",
    subtitle:
      "text-lg text-text-secondary max-w-2xl mx-auto transition-colors duration-300",
    skillsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    skillCategory: "space-y-6",
    categoryTitle:
      "text-xl font-semibold text-text-primary mb-4 transition-colors duration-300",
    skillsList: "space-y-3",
    skillItem:
      "flex items-center justify-between p-3 bg-bg-secondary rounded-lg transition-colors duration-300",
    skillName: "text-text-primary font-medium transition-colors duration-300",
    skillLevel: "text-sm text-text-secondary transition-colors duration-300",
    levelIndicator: "w-16 h-2 bg-bg-tertiary rounded-full overflow-hidden",
    levelBar: "h-full bg-accent-primary transition-all duration-300",
    expert: "w-full",
    advanced: "w-4/5",
    intermediate: "w-3/5",
    beginner: "w-2/5",
  };
};
