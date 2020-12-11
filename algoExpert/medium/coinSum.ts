export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  // Write your code here.
  // get all denoms smaller than n
  const filteredDenoms = denoms.filter((denom) => denom <= n);

  return -1;
}

// const x = (input: T): <T extends string | number>  => {
//   //
// }
