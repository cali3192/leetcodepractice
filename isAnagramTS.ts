const transform = (str: String): String => {
  return str
    .split('')
    .sort()
    .join('');
};

const isAnagramTS = (s: String, t: String): Boolean => {
  if (s.length !== t.length) return false;
  return transform(s) === transform(t);
  // return true;
};

const actual = isAnagramTS('anagram', 'nagaram');
console.time();
console.log('actual', actual);
console.timeEnd();

// const returnArr = (arr: Array<String>): Array<any> => {
// Number must be lower case in order for this function to work
const returnArr = (arr: Array<number>): Array<any> => {
  return arr.map((num) => {
    return num ** 2;
  });
};

const returnArrTest = [1, 2, 3, 4];
// const returnArrTest = ['hello', 'world'];
const returnArrActual = returnArr(returnArrTest);
console.log('returnArrActual', returnArrActual);
// const newArr = returnArr('test');
// console.log('newArr', newArr);

const lengthOfLastWord = (str: String): Number => {
  const arr = str.trim().split(' ');
  return arr[arr.length - 1].length;
};

const lengthOfLastWordActual = lengthOfLastWord(
  'what is the length of the last word in this string'
);

console.log('lengthOfLastWordActual', lengthOfLastWordActual);

const primeTester = (n: number): Boolean => {
  if (n < 1 || n % 1 !== 0) return false;

  let i = 2;
  while (n > i) {
    if (n % i !== 0) {
      return true;
    } else {
      i++;
      return false;
    }
  }
};

const primeTesterActual = primeTester(11);
console.log('primeTesterActual', primeTesterActual);
