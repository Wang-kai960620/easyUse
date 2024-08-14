const like = <T extends string, K extends string>(
  str1: T,
  str2: K,
): boolean => {
  return str1.toLowerCase().includes(str2.toLowerCase());
};

export const string = Object.assign({}, { like });
