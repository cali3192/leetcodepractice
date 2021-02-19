function topKFrequent(words: string[], k: number): string[] {
  // define frequency map
  const map = new Map();

  // loop through and populate
  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  // Note: [...map.entries()] -> [word, frequency] array from map

  // sorting our frequencies , sorted: [string, number] -> [word, frequency]
  const sorted = [...map.entries()].sort((a, b) => {
    // if frequency is the same
    if (a[1] === b[1]) {
      // return based on input order
      if (a[0] < b[0]) return -1;
      if (a[0] < b[0]) return 1;
    } else {
      // return order based on frequency
      return b[1] - a[1];
    }
  });

  // define our result arr
  const result = [];

  // pointer
  let i = 0;

  // getting the k most frequently used words
  while (i < k) {
    // pushing the word to result
    result.push(sorted[i][0]);
    i++;
  }

  // returning the k most frequent words
  return result;
}
