// // == define some helper functions
// const getDec2bin = (dec) => (dec >>> 0).toString(2);
// const leftPad = (str, padChar, totalLength) => {
//   while (str.length < totalLength) {
//     str = padChar + str;
//   }
//   return str;
// };
// // == end helper functions

// const validUtf8 = (data) => {
//   console.log(`initial data`, { data });

//   const byteStrs = data.map((integer) => {
//     const dec2binInt = getDec2bin(integer);

//     console.log(
//       "LOG ~ file: index.js ~ line 16 ~ byteStrs ~ dec2binInt",
//       dec2binInt
//     );

//     return leftPad(dec2binInt, "0", 8);
//   });

//   console.log("LOG ~ file: index.js ~ line 24 ~ byteStrs ~ byteStrs", byteStrs);

//   let continuingByteCount = 0;

//   const result = byteStrs.every((byteStr) => {
//     // case 1: handle if we're in a n-byte char
//     if (continuingByteCount > 0) {
//       // if we're currently in an n-byte str and the current byte
//       // doesn't have the continuation sequence, it's wrong

//       if (byteStr.slice(0, 2) !== "10") return false;

//       // else, proceed to next byte
//       continuingByteCount--;

//       return true;
//     }

//     // case 2: handle continuation sequence used when we're not in an n-byte char
//     if (byteStr.slice(0, 2) === "10") return false;

//     // case 3: 1-byte char
//     if (byteStr.slice(0, 1) === "0") return true;

//     // case 4 (final): below is all for handling a new multi-byte char
//     for (let i = 0; i < byteStr.length; i++) {
//       const byteChar = byteStr[i];
//       if (byteChar === "1") continuingByteCount++;
//       else break;
//     }
//     continuingByteCount--;
//     // check if the bytes are longer than 4, if so it's wrong
//     if (continuingByteCount >= 4) return false;
//     // go to next byte
//     return true;
//   });
//   // if continuing byte count is more than 0, then we didn't finish
//   // a character so the result is definitely false. else,
//   // return whatever was determined from the loop
//   return continuingByteCount > 0 ? false : result;
// };

/**
 * @param {number[]} data
 * @return {boolean}
 */

// helpers for format nums
const getDec2bin = (dec) => (dec >>> 0).toString(2);

const leftPad = (str, padChar, totalLength) => {
  while (str.length < totalLength) {
    str = padChar + str;
  }
  return str;
};

const validUtf8 = (data) => {
  const dec2binInts = data.map((integer) => {
    const dec2bitInt = getDec2bin(integer);

    return leftPad(dec2bitInt, "0", 8);
  });

  let numOfBytes = 0;

  for (let bitInt of dec2binInts) {
    if (numOfBytes >= 0) {
      // getting the initial numOfBytes
      numOfBytes = bitInt.indexOf("0") - 1;

      // UTF8 can only be 1 to 4 bytes long, handles 111 and 100 cases
      if (numOfBytes > 3 || numOfBytes < -1 || numOfBytes === 0) {
        return false;
      }
    } else {
      // getting the first 2 digits of string
      let checkFor10s = bitInt.slice(0, 2);

      // there should be the same num of "10"s as there are numOfBytes
      if (numOfBytes > 0 && checkFor10s !== "10") {
        return false;
      }

      // we need to check for 1 less byte
      numOfBytes--;
    }
  }

  return numOfBytes <= 0;
};
