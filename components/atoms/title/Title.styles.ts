export const getTitleStyles = (level: number) => {
  const styles = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary transition-colors duration-300",
    2: "text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary transition-colors duration-300",
    3: "text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary transition-colors duration-300",
    4: "text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary transition-colors duration-300",
    5: "text-lg md:text-xl lg:text-2xl font-medium text-text-primary transition-colors duration-300",
    6: "text-base md:text-lg lg:text-xl font-medium text-text-primary transition-colors duration-300",
  };

  return styles[level as keyof typeof styles] || styles[1];
};
