const alpha = "abcdefghijklmnopqrstuvwxyz";

const generateRandomStock = () => {
  // get random val 2-4
  const nums = getRandNumber();

  let stock = "";

  // get 2-4 random letters
  for (let i = 0; i < nums; i++) {
    stock += getRandLetter();
  }

  return stock.toUpperCase();
};

const getRandNumber = () => {
  return Math.floor(Math.random() * 3) + 2;
};

const getRandLetter = () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const idx = Math.floor(Math.random() * 26) + 0;
  return alpha[idx];
};

console.log(`LOG: `, generateRandomStock());
