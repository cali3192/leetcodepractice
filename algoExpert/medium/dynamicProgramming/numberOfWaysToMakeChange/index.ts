export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  // Write your code here.

  // create ways array filled with 0s
  const ways = new Array(n + 1).fill(0);

  // base case is initial value 1
  ways[0] = 1;

  // loop through denoms
  for (let denom of denoms) {
    // initialize amount at 1
    let amount = 1;

    // while amount < n  +1
    while (amount < n + 1) {
      // if denom is less than anount

      if (denom <= amount) {
        // ways[amount] += ways[amount - denom]
        ways[amount] += ways[amount - denom];
        console.log({ amount, denom, ways });
      }

      // increment amount
      amount++;
    }
  }

  // return last elem in ways
  return ways[n];
  // return -1;
}
