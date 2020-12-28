export function longestPeak(array: number[]) {
  // Write your code here.

  // initialize longest
  let longest = 0;

  // loop through from 1 - length - 1
  for (let i = 1; i < array.length - 1; i++) {
    const elem = array[i];

    // if element is peak
    if (isPeak(i, array)) {
      // console.log(`inside isPEak -> `, { elem });

      // look left and look right
      const peakLength = getPeakLength(i, array);

      // if length greater than longest
      if (peakLength > longest) {
        // update longest
        longest = peakLength;
      }
    }
  }

  // return longest
  return longest;
}

const isPeak = (i: number, array: number[]) => {
  const prev = array[i - 1];
  const curr = array[i];
  const next = array[i + 1];

  return prev < curr && curr > next;
};

const getPeakLength = (i: number, array: number[]) => {
  let count = 1; // includes the peak

  // get reference for left and right
  let left = i,
    right = i;

  // starting at peak, count left until you hit a valley
  while (left >= 0) {
    // look back one
    let prev = array[left - 1];

    // if decending
    if (prev < array[left]) {
      // update count
      count++;

      // update pointer
      left--;
    } else {
      break;
    }
  }

  // starting at peak, count right you hit a valley
  while (right < array.length) {
    // look ahead
    let next = array[right + 1];

    // if decending
    if (next < array[right]) {
      // update count
      count++;

      // update pointer
      right++;
    } else {
      break;
    }
  }

  // return final count
  return count;
};

const longestPeakInput = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]; // 6

const longestPeakActual = longestPeak(longestPeakInput);

console.log(
  "LOG ~ file: index.ts ~ line 74 ~ longestPeakActual",
  longestPeakActual
);
