const productSum = (array, multiplier = 1) => {
  // Write your code here.
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
};

const actual = productSum([[1, 2], 3, [4, 5]]); //27
console.log('actual', actual);
