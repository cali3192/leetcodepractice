// const constructArray = (n) => {
//   const arr = [];
//   let i = 1;

//   while (i <= n) {
//     const elem = i.toString();
//     arr.push(elem);
//     i++;
//   }
//   return arr;
// };

// const convertString = (string) => {
//   const number = parseInt(string, 10);
//   console.log("LOG:", number);

//   if (number % 15 === 0) {
//     return "FizzBuzz";
//   }

//   if (number % 5 === 0) {
//     return "Buzz";
//   }

//   if (number % 3 === 0) {
//     return "Fizz";
//   }

//   return string;
// };

// var fizzBuzz = function (n) {
//   const arr = [];

//   let i = 1;
//   const fizz = 3;
//   const buzz = 5;
//   // const fizzbuzz = fizz * buzz;

//   while (i <= n) {
//     if (i % fizz === 0 && i % buzz === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % buzz === 0) {
//       arr.push("Buzz");
//     } else if (i % fizz === 0) {
//       arr.push("Fizz");
//     } else {
//       arr.push(i.toString());
//     }
//     i++;
//   }

//   return arr;
// };

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  let result = [];
  let i = 0;

  while (i < n) {
    if (i % 15 === 0) {
      result.push("Fizzbuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
    i++;
  }

  console.log({ result });

  return result;
}

const test = fizzBuzz(15);
console.log("LOG: ", test);
