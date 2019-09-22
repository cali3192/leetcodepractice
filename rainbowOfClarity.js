const createDigits = () => {
  let obj = {};

  let i = 0;

  while (i < 10) {
    obj[i] = true;
    i++;
  }

  return obj;
};

const isDigit = (symbol) => {
  const obj = createDigits();

  return obj.hasOwnProperty(symbol);
};

const isDigitActual = isDigit('-');
console.log('isDigitActual', isDigitActual);

const lineEncoding = (str) => {
  // const mapStr = new Map();

  // str.split('').forEach((letter) => {
  //   if (!mapStr.has(letter)) {
  //     mapStr.set(letter, { val: 1 });
  //   } else {
  //     mapStr.get(letter).val++;
  //   }
  // });

  // let result = '';

  // [...mapStr].map(([key, value]) => {
  //   if (value.val === 1) {
  //     result += `${key}`;
  //   } else {
  //     result += `${value.val}${key}`;
  //   }
  // });

  // return result;

  // placeholder otherwise the last count will not get captured
  str += '-';
  let count = 1;
  let result = '';
  for (let i = 1; i < str.length; i++) {
    let curr = str[i];
    let prev = str[i - 1];
    if (curr === prev) {
      count++;
    } else {
      if (count > 1) {
        result += `${count}`;
      }
      result += `${prev}`;
      count = 1;
    }
  }

  return result;
};

const lineEncodingActual = lineEncoding('abbcabb');
console.log('lineEncodingActual', lineEncodingActual); // a2bca2b
