const evenOccurrence = (arr) => {
  // return arr;
  const mapVal = new Map();
  arr.forEach((element) => {
    if (!mapVal.has(element)) {
      mapVal.set(element, { val: 1 });
    }
    mapVal.get(element).val++;
  });

let result = []

};

let testArr = [1, 4, 6, 6, 4];
const evenActual = evenOccurrence(testArr);
console.log('evenActual', evenActual);
