function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let smallestDiff = Number.MAX_SAFE_INTEGER;
  let result = [];

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  console.log(`LOG: `, { arrayOne, arrayTwo });

  let oneAnchor = 0,
    twoAnchor = 0;

  while (oneAnchor < arrayOne.length && twoAnchor < arrayTwo.length) {
    const oneElem = arrayOne[oneAnchor],
      twoElem = arrayTwo[twoAnchor];

    if (oneElem === twoElem) return [oneElem, twoElem];

    const diff = Math.abs(twoElem - oneElem);

    if (diff < smallestDiff) {
      smallestDiff = diff;
      result = [oneElem, twoElem];
    }

    console.log(`LOG: `, { oneAnchor, twoAnchor });
    if (Math.max(oneElem, twoElem) === twoElem) {
      oneAnchor++;
    } else {
      twoAnchor++;
    }
  }

  return result;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 138, 15, 17];

const smallestDifferenceActual = smallestDifference(arrayOne, arrayTwo);
console.log("LOG ~ file: smallestDifference.js -> ", smallestDifferenceActual);
