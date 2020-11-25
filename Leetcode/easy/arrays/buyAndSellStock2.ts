/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * @param prices
 *
 *
 */

const maxProfit = (prices: number[]): number => {
  // profit
  let profit = 0;

  // edge cases
  if (prices.length === 0 || prices.length === 1) return profit;

  // length - 1 because you're only interested in today and tomorrow
  for (let index = 0; index < prices.length - 1; index++) {
    const today = prices[index];
    const tomorrow = prices[index + 1];

    // if tomorrow is greater, add to profit
    if (today < tomorrow) {
      profit += tomorrow - today;
    }
  }

  return profit;
};

// const testPrices = [7];
const testPrices = [7, 1, 5, 3, 6, 4];

const maxProfitTest = maxProfit(testPrices);

console.log(
  "LOG ~ file: buyAndSellStock2.ts ~ line 19 ~ maxProfitTest",
  maxProfitTest
);
