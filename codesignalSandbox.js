// largestadjecent product
const largestAdjecentProductArr = [1, 2, -2, -3, 7, 3, 8];

const largestAdjecent = (arr) => {
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    const elem = arr[i];
    const pre = arr[i - 1];
    const prod = elem * pre;
    if (prod > result) result = prod;
  }

  return result;
};

console.log('largestAdjecent() \n', largestAdjecent(largestAdjecentProductArr));
