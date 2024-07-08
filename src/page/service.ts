function sum(a: number, b: number): number {
  return a + b;
}

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    reject("1错误");
  });
}

export { sum, fetchData };
