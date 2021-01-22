export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  // Write your code here.

  const ways = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  // base case
  ways[0] = 0;

  // loop through denoms
  for (const denom of denoms) {
    // loop through ways starting at 1, each index represents the amount
    for (let amount = 1; amount < ways.length; amount++) {
      // if denom <= amount
      if (denom <= amount) {
        // get difference
        const diff = amount - denom;

        // num coins with current denom
        const coins = ways[diff] + 1;

        // the min number of ways is min of the current position or coins
        ways[amount] = Math.min(ways[amount], coins);
      }
    }
  }

  return ways[n] === Number.MAX_SAFE_INTEGER ? -1 : ways[n];
}
