const constructArray = (n) => {
  const arr = [];
  let i = 1;

  while (i <= n) {
    const elem = i.toString();
    arr.push(elem);
    i++;
  }
  return arr;
};

const convertString = (string) => {
  const number = parseInt(string, 10);
  console.log("LOG:", number);

  if (number % 15 === 0) {
    return "FizzBuzz";
  }

  if (number % 5 === 0) {
    return "Buzz";
  }

  if (number % 3 === 0) {
    return "Fizz";
  }

  return string;
};

var fizzBuzz = function (n) {
  const arr = [];

  let i = 1;
  const fizz = 3;
  const buzz = 5;
  // const fizzbuzz = fizz * buzz;

  while (i <= n) {
    if (i % fizz === 0 && i % buzz === 0) {
      arr.push("FizzBuzz");
    } else if (i % buzz === 0) {
      arr.push("Buzz");
    } else if (i % fizz === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i.toString());
    }
    i++;
  }

  return arr;
};

const testConstructArr = constructArray(15);

const testConvert = convertString("2");

const test = fizzBuzz(15);
console.log("LOG: ", test);
