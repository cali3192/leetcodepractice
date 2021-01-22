export function hasSingleCycle(array: number[]) {
  // Write your code here.

  // set initial index to 0
  let i = 0;
  // track the elements that you've seen
  let seen = 0;

  // loop through elems
  while (seen < array.length) {
    // if you're back at the begining, that was a cycle
    if (seen > 0 && i === 0) return false;

    // update seen
    seen++;

    // get next index and set to index
    i = getNextIndex(i, array);
  }
  console.log({ i });

  // you should end at the start
  return i === 0;
  // return false;
}

// helper
// get next index helper, current index array
const getNextIndex = (i: number, array: number[]): number => {
  // jump is the current index + its elem
  const jump = i + array[i];

  const nextIdx = jump % array.length;

  // if your next is (-), add it with your array length
  return nextIdx >= 0 ? nextIdx : array.length + nextIdx;
};
