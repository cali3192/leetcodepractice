export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  // Write your code here.
  // reds and blues in teh same row

  if (redShirtHeights.length !== blueShirtHeights.length) return false;

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  // which color is in front based on first position
  const { firstRow, backRow } = defineRows(redShirtHeights, blueShirtHeights);

  // whichever color is in teh front row, each person at a position is shorter than the back
  for (let i = 0; i < firstRow.length; i++) {
    const front = firstRow[i];
    const back = backRow[i];

    if (front > back) {
      return false;
    }
  }

  return true;
}

const defineRows = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
): { firstRow: number[]; backRow: number[] } => {
  return redShirtHeights[0] < blueShirtHeights[0]
    ? { firstRow: redShirtHeights, backRow: blueShirtHeights }
    : { firstRow: blueShirtHeights, backRow: redShirtHeights };
};
