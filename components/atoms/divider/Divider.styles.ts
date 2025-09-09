export const getDividerStyles = (orientation: string) => {
  const styles = {
    horizontal: "w-full h-px bg-border transition-colors duration-300",
    vertical: "h-full w-px bg-border transition-colors duration-300",
  };

  return styles[orientation as keyof typeof styles] || styles.horizontal;
};
