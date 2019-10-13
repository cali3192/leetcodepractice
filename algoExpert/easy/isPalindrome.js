const isPalindrome = (string) => {
  // Write your code here.
  // // Naive solution - time: O(n) | space: O(n)
  // return (
  //   string ===
  //   string
  //     .split('')
  //     .reverse()
  //     .join('')
  // );

  // Optimized solution - time: O(n) | space: O(1)
  let i = 0;
  let j = string.length - 1;

  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const actual = isPalindrome('aabcbaa');
console.log('actual', actual);
