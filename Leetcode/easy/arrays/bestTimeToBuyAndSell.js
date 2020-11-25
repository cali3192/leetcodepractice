/**
 * 121. Best Time to Buy and Sell Stock
 *
 * @param {*} prices
 *
 */

const maxProfit = (prices) => {
  // set profit
  let profit = 0;

  // edge cases
  if (prices.length === 0 || prices.length === 1) return profit;

  // high min value that we expect to be updated
  let min = Number.MAX_SAFE_INTEGER;

  // loop through the array
  for (let i = 0; i < prices.length; i++) {
    // get todays price
    const currentPrice = prices[i];

    // keep track of the min value
    if (Math.min(min, currentPrice) === currentPrice) {
      min = currentPrice;
    } else {
      // you expect that the highest profit will be the delta with the lowest seen price
      const todaysProfit = currentPrice - min;

      // if todays profit is greater than profit, update
      profit = Math.max(profit, todaysProfit);
    }
  }

  return profit;
};

// decending
// const maxProfitInput = [7, 6, 5, 4, 3, 2, 1];

// ascending
// const maxProfitInput = [1, 2, 3, 4, 5, 6, 7];

// rand
const maxProfitInput = [7, 1, 5, 3, 6, 4];

const maxProfitTest = maxProfit(maxProfitInput);
console.log(
  "LOG ~ file: bestTimeToBuyAndSell.ts ~ line 38 ~ maxProfitTest",
  maxProfitTest
);
