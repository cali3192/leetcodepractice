const threeSum = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
