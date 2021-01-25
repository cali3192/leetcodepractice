type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  // Write your code here.

	// start at top right
  let row = 0,
    col = matrix[0].length - 1;

	// loop while you're in bounds
  while (row < matrix.length && col >= 0) {
    const elem = matrix[row][col];

		// if found target, return position
    if (elem === target) {
      return [row, col];
    }

    // if target is greater, go down row
    if (target > elem) row++;

		// if target less move left in cols
    if (target < elem) col--;
  }

	// if not in matrix, return [-1,-1]
  return [-1, -1];
}
