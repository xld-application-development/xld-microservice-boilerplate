export const snakeCase = (string: string) => {
  return string
    .replace(/\d+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toUpperCase())
    .join('_');
};
