// const caesarCipherEncryptor = (string, key) => {
//   // Write your code here.
//   let str = '';
//   const newKey = key % 26;
//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i];
//     str += createNewLetter(letter, newKey);
//   }
//   return str;
// };
// const createNewLetter = (letter, key) => {
//   let newCharCode = letter.charCodeAt() + key;
//   return newCharCode <= 122
//     ? String.fromCharCode(newCharCode)
//     : String.fromCharCode(96 + (newCharCode % 122));
// };
var caesarCipherEncryptor = function (string, key) {
    var result = "";
    var updatedKey = key % 26;
    console.log("\n\n LOG ~ file: caeserCipher.ts ~ line 24 ~ caesarCipherEncryptor ~ updatedKey", updatedKey);
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        var decipheredLetter = getNewCharacter(letter, updatedKey);
        result += decipheredLetter;
    }
    return result;
};
var getNewCharacter = function (letter, key) {
    var updatedCharCode = letter.charCodeAt(0) + key;
    // 96 -> a and 122 -> z
    var charCodeToConvert = updatedCharCode <= 122 ? updatedCharCode : 96 + (updatedCharCode % 122);
    console.log("LOG ~ file: caeserCipher.ts ~ line 46 ~ getNewCharacter ~ charCodeToConvert", charCodeToConvert);
    return String.fromCharCode(charCodeToConvert);
};
var actual = caesarCipherEncryptor("xyz", 2); // zab
console.log("actual", actual);
