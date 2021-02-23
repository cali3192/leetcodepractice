/**
 * 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  // sort our cuts
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  // helper to get horizontal and vertical interval arrays
  const horizontalIntervals = getIntervals(horizontalCuts, h);
  const verticalIntervals = getIntervals(verticalCuts, w);

  // get maxes from arrays
  let horizontalMax = Math.max(...horizontalIntervals),
    verticalMax = Math.max(...verticalIntervals);

  // the result is the max intervals * each other
  // 10^9 + 7 to handle large areas
  return (horizontalMax * verticalMax) % (10 ** 9 + 7);
}

const getIntervals = (cuts: number[], upperBound: number) => {
  // array starting at 0, place cuts, then upperbound
  const cutsWithBounds = [0, ...cuts, upperBound];

  // tracking intervals
  const intervals: number[] = [];

  // starting at second elem, get the difference between cuts
  for (let i = 1; i < cutsWithBounds.length; i++) {
    const prevCut = cutsWithBounds[i - 1];
    const currCut = cutsWithBounds[i];

    // set element in our intervals array
    intervals[i - 1] = currCut - prevCut;
  }

  return intervals;
};
