var orangesRotting = function (grid) {
  // define moves [rowDirection, colDirection]
  const MOVES = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // define a queue [row, col]
  let queue = [];

  // initialize timer and number of fresh oranges
  let minutes = 0,
    fresh = 0;

  // Loop 1: loop through oranges matrix to look for rot and count fresh
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // rot goes in queue
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }

      // if fresh oranges are found, add to counter
      if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  // Loop 2: continue looping as long as there are fresh oranges and rot in the queue
  while (fresh && queue.length) {
    // get next
    const next = [];

    // loop thorugh queue
    for (const [row, col] of queue) {
      // go thorugh possible moves
      for (let i = 0; i < MOVES.length; i++) {
        // const element = queue[i];
        const nextRowIdx = row + MOVES[i][0];
        const nextColIdx = col + MOVES[i][1];

        // check for bounds or fres oranges
        if (
          inBounds(grid, nextRowIdx, nextColIdx) &&
          grid[nextRowIdx][nextColIdx] === 1
        ) {
          fresh--;

          grid[nextRowIdx][nextColIdx] = 2;

          next.push([nextRowIdx, nextColIdx]);
        }
      }
    }

    minutes++;

    queue = next;
  }

  // if left with fresh oranges, return 0 else return time to rot
  return !!fresh ? -1 : minutes;
};

const inBounds = (matrix, i, j) => {
  // row bounds
  const rowBounds = i < matrix.length && i >= 0;

  // col bounds
  const colBounds = j < matrix[0].length && j >= 0;

  return rowBounds && colBounds;
};
