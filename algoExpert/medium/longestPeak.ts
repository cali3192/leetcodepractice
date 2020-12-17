function longestPeak(array) {
  // Write your code here.
  let max = 1;

  for (let i = 0; i < array.length - 1; i++) {
    const curr = array[i];
    const prev = array[i - 1];
    const next = array[i + 1];

    if (isPeak(prev, curr, next)) {
      const numUp = checkLeft(i, array);
      const numDown = checkRight(i, array);

      const climb = numUp + numDown;

      if (climb > max) {
        max = climb;
      }
    }
  }

  // includes peak
  return max > 1 ? max + 1 : 0;
}

// helper to check for peaks
const isPeak = (left, curr, right) => {
  if (left < curr && curr > right) {
    return true;
  }

  return false;
};

// helper to check left side
const checkLeft = (index, array) => {
  let counter = 0;

  while (index > 0) {
    const curr = array[index];
    let prev = array[index - 1];

    if (prev < curr) {
      counter++;
      index--;
    } else {
      break;
    }
  }

  return counter;
};

// helper to check right side
const checkRight = (index, array) => {
  let counter = 0;

  while (index < array.length) {
    const curr = array[index];
    let next = array[index + 1];

    if (curr > next) {
      counter++;
      index++;
    } else {
      break;
    }
  }
  return counter;
};

const testInput = [1, 3, 3, 4, 0, 10, 6, 5, 4, 3];
// const actual = longestPeak(testInput);
// console.log("LOG ~ file: longestPeak.ts ~ line 31 ~ actual", actual);

const checkLeftActual = checkLeft(3, testInput);
const checkRightActual = checkRight(5, testInput);

// console.log(
//   "LOG ~ file: longestPeak.ts ~ line 40 ~ checkLeftActual",
//   checkLeftActual
// );

console.log(
  "LOG ~ file: longestPeak.ts ~ line 40 ~ checkRightActual",
  checkRightActual
);
