export function longestPalindromicSubstring(string: string) {
  // Write your code here.
  // represents the indices in the string we want to slice from to get palindrom
  let currLongest: [number, number] = [0, 1];

  // loop through string starting at 1
  for (let i = 1; i < string.length; i++) {
    // get odd, getLonest(string, i - 1, i + 1)
    const odd = getLongestPalindrom(i - 1, i + 1, string);

    // get event, getLonest(string, i - 1, i )
    const even = getLongestPalindrom(i - 1, i, string);

    // update longest tuple based on differences between odd[0,1] and even[0,1]
    const longest =
      getTupleDifference(odd) > getTupleDifference(even) ? odd : even;

    // if the longest longest length based on index is greater the the currentlongest, replace
    currLongest =
      getTupleDifference(currLongest) > getTupleDifference(longest)
        ? currLongest
        : longest;

    console.log({ odd, even, longest, currLongest });
  }

  // return at longest indices

  const result = string.slice(currLongest[0], currLongest[1]);
  // result = string.slice(longest[0], longest[1]);

  console.log({ result });
  return result;
}

const getLongestPalindrom = (
  left: number,
  right: number,
  string: string
): [number, number] => {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;

    left--;
    right++;
  }

  // the left index will be 1 too far to the left  - and also based on our longest tuple
  return [left + 1, right];
};

const getTupleDifference = (tuple: [number, number]) => {
  return tuple[1] - tuple[0];
};
