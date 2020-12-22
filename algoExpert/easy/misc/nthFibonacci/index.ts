export function getNthFib(n: number) {
  // Write your code here.
  if (n === 0) return 0;

  if (n <= 2) return n - 1;

  return getNthFib(n - 2) + getNthFib(n - 1);

  // return -1;
}
