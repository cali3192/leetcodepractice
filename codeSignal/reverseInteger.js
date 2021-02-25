const formatNum = (num) => {
  // return `${num}`.replace('-', '');
  return parseFloat(
    `${num}`
      .replace('-', '')
      .split('')
      .reverse()
      .join('')
  );
};

const reverseInt = (x) => {
  let result = formatNum(x);
  if (result * -1 < (-2) ** 31 || result > 2 ** 31) return 0;
  return x < 0 ? result * -1 : result;
};

const actual = reverseInt(-123);
console.log('actual', actual);

const actualOne = reverseInt(1534236469);
console.log('actualOne', actualOne);
