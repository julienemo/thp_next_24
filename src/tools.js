export const chopString = (string, maxLength) => {
  if (string.length <= maxLength) { return string; }
  return `${string.substr(0, maxLength)}...`;
};
