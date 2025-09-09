export const getContactFormStyles = () => {
  return {
    container: "max-w-md mx-auto",
    form: "space-y-6",
    field: "space-y-2",
    label: "block text-sm font-medium text-text-primary",
    input:
      "w-full px-3 py-2 bg-input-bg border border-input-border text-text-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-input-focus focus:border-input-focus transition-colors duration-300",
    textarea:
      "w-full px-3 py-2 bg-input-bg border border-input-border text-text-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-input-focus focus:border-input-focus resize-vertical min-h-[120px] transition-colors duration-300",
    button: "w-full",
    error: "text-red-600 text-sm mt-1",
    success: "text-green-600 text-sm mt-1",
  };
};
