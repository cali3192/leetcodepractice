/*
 * Complete the 'combineParts' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY parts as parameter.
 *
 * 1. combine 2 at a time
 * 2. parts together is equal to partsSizes
 *
 */

function combineParts(parts) {
  console.log(`input`, { parts });

  // Write your code here
  if (parts.length === 1) return 0;

  // nlogn
  // sorting our input
  parts.sort((a, b) => a - b);

  // starting at second elem
  let i = 1;

  // result array to track sums
  let res = [];

  // while there are more than 1 part
  while (parts.length >= 2) {
    // get the sum of current elem and previous elem
    let sum = parts[i] + parts[i - 1];

    console.log({ sum });
    // set the new sum to parts[1]
    parts[i] = sum;

    // add the current sum to our result array
    res.push(sum);

    // remove the first element in parts
    parts = parts.slice(1);

    // sort so that we are adding the 2 smallest values
    parts = parts.sort((a, b) => a - b);

    console.log({ parts, res });
  }

  // our final result is the sum of all the sums
  let result = res.reduce((a, b) => a + b);
  console.log({ result });
  return result;
}
