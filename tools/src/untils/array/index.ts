const uniqByKey = <T, K extends keyof T>(
  arr: T[],
  key: K | ((item: T) => keyof T),
): T[] => {
  const set = new Set();
  return arr.filter((v) => {
    if (set.has(v)) {
      return false;
    }
    set.add(v);
    return true;
  });
};

export { uniqByKey };
