/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph: string, banned: string[]) {
  // define our frequency map
  const map = new Map();

  // calls helper to get rid of special characters
  const cleanParagraph = getCleanParagraph(paragraph);

  // convert our string to an array
  const wordArray = cleanParagraph.split(" ");

  // loop through
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];

    // if word is banned, do nothing
    if (banned.indexOf(word) > -1) {
      continue;
    }

    // populate map with frequncies
    map.set(word, (map.get(word) || 0) + 1);
  }

  // tracking max frequncy and word
  let max = ["", 0];

  // loop through map
  for (let [word, freq] of map) {
    // if frequncy greater than current max
    if (freq > max[1]) {
      // update max
      max = [word, freq];
    }
  }

  // return word with most frequency
  return max[0];
};

const getCleanParagraph = (paragraph: string) => {
  return paragraph.toLowerCase().replace(/[^a-zA-Z]+/g, " ");
};
