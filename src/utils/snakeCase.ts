export const snakeCase = string => {
  return string
    .replace(/\d+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toUpperCase())
    .join('_');
};
