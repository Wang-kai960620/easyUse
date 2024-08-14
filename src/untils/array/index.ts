export const uniqBy = <T>(arr: T[], fn: (item: T) => keyof T): T[] => {
  const set: Set<keyof T> = new Set();
  return arr.filter((item) => {
    const key = fn(item);
    if (set.has(key)) {
      return false;
    }
    set.add(key);
    return true;
  });
};

export const partition = <T>(
  arr: T[],
  fn: (item: T) => boolean,
): [T[], T[]] => {
  const trueArr: T[] = [];
  const falseArr: T[] = [];
  arr.forEach((item) => {
    if (fn(item)) {
      trueArr.push(item);
    } else {
      falseArr.push(item);
    }
  });
  return [trueArr, falseArr];
};

export const isArray = <T>(arr: T[] | T): arr is T[] => {
  return Array.isArray(arr);
};
