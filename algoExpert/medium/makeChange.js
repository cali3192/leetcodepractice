const numberOfWaysToMakeChange = (n, denoms) => {
  // Write your code here.
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  let possible = denoms.filter((denom) => denom <= n);

  for (let i = 0; i < possible.length; i++) {
    const denom = possible[i];
    for (let j = 1; j < n + 1; j++) {
      if (denom <= j) {
        ways[j] += ways[j - denom];
      }
      console.log(`inside ways`, j, denom, ways);
    }
  }

  return ways[n];
};

const test = numberOfWaysToMakeChange(25, [1, 5, 10, 25]);
console.log('test', test);

// what does comp package look like?
