type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray) {
  // Write your code here.

  // call helper so function signature does not change
  const sum = calculatesum(array, 1);

  return sum;
}

// helper to calculate the sum
const calculatesum = (array: SpecialArray, depth: number) => {
  // sum of inner arrays
  let sum = 0;

  // loop through array
  for (const element of array) {
    // if not array
    if (!Array.isArray(element)) {
      // add to the sum
      sum += element;
    } else {
      // add sum to result of passing next arrays to calcualte sum
      sum += calculatesum(element, depth + 1);
    }
  }

  // return the result
  return sum * depth;
};
