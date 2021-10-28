const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};



const countLetters = function(word, letters) {
  for (char of word){
    for(key in letters){
      if(char.toLowerCase() === key){
        letters[key] += 1;
      }
    }
    /*
    if(char >= "a" && char <= "z" || char >= "A" && char <= "Z"){
      console.log('is a letter');
      letters[char] += 1;
    } else{
      console.log('is not a letter');
    } 
    */
  }
  return letters;
};

const letters = {
"a": 0, "b": 0, "c": 0, "d": 0, "e": 0, 
"f": 0, "g": 0, "h": 0, "i": 0, "j": 0, 
"k": 0, "l": 0, "m": 0, "n": 0, "o": 0, 
"p": 0, "q": 0, "r": 0, "s": 0, "t": 0, 
"u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0};
/*
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
*/
/*
for (key in letters){
  letters[key] += 1;
  console.log(letters[key]);
};
*/
//const sentence = "HeH!!0.";
//console.log(countLetters(sentence, letters));


const str = "HeH!!0. W0rLle3E!";
console.log(countLetters(str, letters));
