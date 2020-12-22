export function findThreeLargestNumbers(array: number[]) {
  // Write your code here.

  // initialize result array to be really small
  let result = [
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ];

  // loop through array
  for (let i = 0; i < array.length; i++) {
    // get the element
    const elem = array[i];

    // if the element is greater than our smallest in result arr, we are interested in placing it
    if (elem > result[0]) {
      // helper to determine where elem it goes and returns an updated array
      result = placeInResult(elem, result);
    }
  }

  return result;
}

const placeInResult = (elem: number, array: number[]) => {
  // is it the max?
  if (elem >= array[2]) {
    // if max, put at the end of array
    array.push(elem);

    // if elem less than max, greater than first elem and greater than current middle elem
  } else if (elem < array[2] && elem > array[0] && elem >= array[1]) {
    // place in mid
    array.splice(2, 0, elem);

    // else, its the smallest in the result array
  } else {
    array.splice(1, 0, elem);
  }
  console.log({ array });

  // return the newly shifted array
  return array.slice(1, 4);
};
