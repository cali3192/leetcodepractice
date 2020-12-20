export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const sums = new Map();

  for (let i = 0; i < array.length; i++) {
    // get element
    const element = array[i];

    // const difference
    const diff = targetSum - element;
    if (!sums.has(element)) {
      return [element, diff];
    } else {
      // set the diff with elem
      sums.set(diff, element);
    }

    console.log({ sums });
  }

  return [];
}

const twoSumInput = [3, 5, -4, 8, 11, 1, -1, 6];
const twoSumTargetInput = 10;
const twoSumActual = twoNumberSum(twoSumInput, twoSumTargetInput);

console.log("LOG ~ file: index.ts ~ line 8 ~ twoSumActual", twoSumActual);
