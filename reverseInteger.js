const reverse = function(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let result = 0;

  while (x) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + digit;
  }

  // restrict result to maintain settled overflow
  if (result > 2 ** 31) {
    return 0;
  }

  return isNegative ? -result : result;
};

const actual = reverse(-123);
console.log('actual', actual);

const actualOne = reverse(1534236469);
console.log('actualOne', actualOne);
