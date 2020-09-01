const maxProfit = (prices) => {
  let min = prices[0];
  let profit = 0;

  for (let index = 0; index < prices.length; index++) {
    const stock = prices[index];

    if (stock < min) {
      min = stock;
    }

    if (stock - min > profit) {
      profit = stock - min;
    }

    // console.log({ min, profit });
  }
  return profit;
};

const input = [7, 1, 5, 3, 6, 4];

const test = maxProfit(input);
console.log("LOG: test", test);
