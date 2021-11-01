// const assertEqual = function(actual, expected) {
//   const failed = String.fromCodePoint(0x1F6D1);
//   const passed = String.fromCodePoint(0x2705);
//   (actual === expected)
//     ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
// };
const countLetters = function(word, letters) {
  for (let char of word) {
    for (let key in letters) {
      if (char.toLowerCase() === key) {
        letters[key] += 1;
      }
    }
  }
  return letters;
};

const letters = {
  "a": 0, "b": 0, "c": 0, "d": 0, "e": 0,
  "f": 0, "g": 0, "h": 0, "i": 0, "j": 0,
  "k": 0, "l": 0, "m": 0, "n": 0, "o": 0,
  "p": 0, "q": 0, "r": 0, "s": 0, "t": 0,
  "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0};

//const sentence = "HeH!!0.";
//console.log(countLetters(sentence, letters));


const str = "HeH!!0. W0rLle3E!";
console.log(countLetters(str, letters));

