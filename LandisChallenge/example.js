function fizzBuzz(n) {
  // Write your code here
  let i = 0;
  let res = "";
  while (i <= n) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    if (isBuzz && isBuzz) {
      res += `\nFizzBuzz`;
    } else if (isBuzz) {
      res += `\nBuzz`;
    } else if (isFizz) {
      res += "\nBuzz";
    } else {
      res += `\n${i}`;
    }

    i++;
  }

  return res;
}

console.log(fizzBuzz(15));
