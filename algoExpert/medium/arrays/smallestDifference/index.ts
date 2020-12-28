export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.

  // sort your inputs to easily move pointers
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // set initial indices
  let one = 0,
    two = 0,
    // set initial result to be large difference
    res = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

  // loop thorugh both input arrays
  while (one < arrayOne.length && two < arrayTwo.length) {
    // define elems
    let oneElem = arrayOne[one],
      twoElem = arrayTwo[two],
      // current closest is from current res
      closest = Math.abs(res[0] - res[1]),
      // calculate the current difference
      diff = Math.abs(oneElem - twoElem);

    // immediately return if elems are the same
    if (diff === 0) return [oneElem, twoElem];

    // if the current difference is closer than elems in res, update res
    if (diff < closest) {
      res = [oneElem, twoElem];
    }

    // update your pointers - because arrs are sorted, you always want to move towards larger elem
    if (Math.max(oneElem, twoElem) === oneElem) {
      two++;
    } else {
      one++;
    }
  }

  return res;
}
