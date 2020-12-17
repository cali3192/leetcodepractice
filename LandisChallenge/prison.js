// matrix of n x m
// h: nunber[]
// n: number[]
function prison(n, m, h, v) {
  // Write your code here
}

// n horizontal and m vertical
const constructBars = (n, m) => {
  const array = new Array(n + 2).fill(0).map(() => Array(m + 2).fill(0));

  return array;
};

const removeHorizontalBar = (bars, h, m) => {
  const replacement = new Array(m + 2).fill(1);

  h.forEach((bar) => (bars[bar] = replacement));

  return bars;
};

const removeVerticalBar = (bars, v) => {
  // console.log(bars);

  for (let i = 0; i < bars.length; i++) {
    // bars[i][v] = 1;bar
    let j = 0;

    while (j < v.length) {
      const col = v[j];
      bars[i][col]++;
      j++;
    }
  }

  return bars;
};

const bars = constructBars(4, 4);
console.log("LOG ~ file: prison.js ~ line 34 ~ bars", bars);

console.log("LOG ~ file: prison.js ~ line 23 ~ updatedBars", bars);

const updatedBars = removeHorizontalBar(bars, [1, 4], 4);

const updatedVerticalBar = removeVerticalBar(bars, [2, 3]);
console.log(
  "LOG ~ file: prison.js ~ line 33 ~ updatedVerticalBar",
  updatedVerticalBar
);

const isIntersection = (elem) => {
  return elem > 1;
};
