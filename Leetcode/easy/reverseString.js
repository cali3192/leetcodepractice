// var reverseString = function (s) {
//   const result = [];

//   for (let i = s.length - 1; i >= 0; i--) {
//     result.push(s[i]);
//     console.log("LOG: reverseString -> s[i]", s[i])
//     console.log("LOG: reverseString -> result", result)
//   }

//   console.log(result);
//   return result;
// };

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  console.log(s);
};

const inputArr = ["h", "e", "l", "l", "o"];
const test = reverseString(inputArr);
console.log("LOG: test", test);
