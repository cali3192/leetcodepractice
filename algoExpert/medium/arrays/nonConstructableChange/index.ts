export function nonConstructibleChange(coins: number[]) {
  // Write your code here.

  // sort the coins from least to most
  coins.sort((a, b) => a - b);

  // base case is index 0 = 1

  let currChangeCreated = 0;

  // loop through coins
  for (const coin of coins) {
    // cases where the coin denomination is larger than the current amount of change you created so far (the [1, 2, 5] scenario)
    if (coin > currChangeCreated + 1) {
      // you don't have enough change to make the next val
      return currChangeCreated + 1;
    }

    // while your total is less than the coin denom [1, 2, 3] scenario where your coin denom will not be greater than the change created
    currChangeCreated += coin;
  }

  return currChangeCreated + 1;
}
