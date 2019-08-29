const commonChars = (arr) => {
  const [first, ...rest] = arr.sort((a, b) => -(a.length - b.length));
  const duplicates = [];
  [...first].forEach((e) => {
    let isDuplicate = true;
    for (let x = 0, len = rest.length; x < len; x++) {
      let letters = rest[x];
      const i = letters.search(e);
      if (i !== -1) {
        letters = letters.slice(0, i) + letters.slice(i + 1);
        rest[x] = letters;
      } else {
        isDuplicate = false;
      }
    }
    if (isDuplicate) {
      duplicates.push(e);
    }
  });
  return duplicates;
};

const assertEqual = (result, expected, testName) => {
  if (typeof result === 'object' || typeof expected === 'object') {
    result = JSON.stringify(result);
    expected = JSON.stringify(expected);
  }
  if (result === expected) {
    console.log(`Test passed ${testName}!`);
  } else {
    console.log(
      `Test failed ${testName}: expected ${expected} but got ${result}`
    );
  }
};

const arr1 = ['bella', 'label', 'roller'];
const actualOne = commonChars(arr1);
console.log('actualOne', actualOne);
const expectedOne = ['e', 'l', 'l'];
// assertEqual(actualOne, expectedOne, 'commonChars');

const arr2 = ['cool', 'lock', 'cook'];
// const actualTwo = commonChars(arr2);
// console.log('actualTwo', actualTwo);
const expectedTwo = ['c', 'o'];
// assertEqual(actualTwo, expectedTwo, 'commonChars');
