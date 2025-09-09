export const getTextStyles = (variant: string) => {
  const styles = {
    body: "text-base text-text-primary leading-relaxed transition-colors duration-300",
    caption:
      "text-sm text-text-secondary leading-normal transition-colors duration-300",
    small:
      "text-xs text-text-secondary leading-normal transition-colors duration-300",
    lead: "text-lg text-text-primary leading-relaxed transition-colors duration-300",
  };

  return styles[variant as keyof typeof styles] || styles.body;
};
