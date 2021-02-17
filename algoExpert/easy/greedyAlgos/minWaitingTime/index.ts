export function minimumWaitingTime(queries: number[]) {
  // Write your code here.

  // sort from smallest to largest so we don't started with our longest query time
  queries.sort((a, b) => a - b);

  // storing the result of the previous query sums
  const arr = new Array(queries.length).fill(0);

  // represents our total query time
  let result = 0;

  for (let i = 1; i < queries.length; i++) {
    // previous query time
    const prev = queries[i - 1];

    // get the length of last query result and add to prev
    const sum = arr[i - 1] + prev;
    // const sum = queries[i - 1] + prev;

    // update our current position at our differnce array
    arr[i] = sum;

    // add the sum to result
    result += sum;

    console.log({ i, prev, sum, arr });
  }

  return result;
}
