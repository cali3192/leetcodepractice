// TODO: to minimize space complexity, you can just hold on to old state and updated state so map.size will always be 0

// function prisonAfterNDays(cells: number[], N: number): number[] {
//   // resetting N because original cell will repear at  N = 14
//   if (N % 14 == 0) {
//     N = 14;
//   } else {
//     N = N % 14;
//   }

//   // define result map
//   const map = new Map();

//   // "Base Case: Day 0" add current cells which is our initial state
//   // key: represents day, value: cells config
//   map.set(0, cells);

//   // initialize i = 1 b.c. we know what day 0 looks like
//   let i = 1;

//   // while map length is up to n days
//   while (map.size <= N) {
//     // definte new possible cell, of length 8 b.c cells is always length 8
//     // Note, at the start and end, you will always have 0 because the elems around will always be different
//     let newCell = new Array(8).fill(0);

//     // get state of last day
//     let oldCell = map.get(i - 1);

//     // loop thorugh and replace (1, 6)
//     for (let j = 1; j < oldCell.length; j++) {
//       replaceElem(j, oldCell, newCell);
//     }

//     // add new elem to map at i
//     map.set(i, newCell);

//     // increment i
//     i++;
//   }

//   const result = map.get(N);

//   return result;
// }

function prisonAfterNDays(cells: number[], N: number): number[] {
  // resetting N because original cell will repear at  N = 14
  if (N % 14 == 0) {
    N = 14;
  } else {
    N = N % 14;
  }

  // declare our storage map
  const map = new Map();

  // set initial state
  map.set(0, cells);

  let i = 1;

  while (i <= N) {
    const initialState = map.get(0);

    const newCell = new Array(8).fill(0);

    // loop through and configure new cell
    for (let j = 0; j < initialState.length; j++) {
      replaceElem(j, initialState, newCell);
    }

    map.set(0, newCell);

    i++;
  }

  return map.get(0);
}

// helper to look around and replace
const replaceElem = (i: number, oldCell: number[], newCell: number[]) => {
  // get elem, before and after neighbor
  let prev = oldCell[i - 1],
    next = oldCell[i + 1];

  // if neighbors are same,
  if (prev === next) {
    // cell is now 1
    newCell[i] = 1;
  }
};
