const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};


// const eqArrays = (arrayOne, arrayTwo) => {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   } else {
//     let match = true;
//     for (let i = 0; i < arrayOne.length; i++) {
//       console.log('Array One:', arrayOne[i], 'Array Two:', arrayTwo[i]);
//       if (arrayOne[i] === arrayTwo[i]) {
//         //console.log('Array One:', arrayOne[i], 'Array Two:', arrayTwo[i]);
//         match = true;
//       } else {
//         match = false;
//         return match;
//       }
//     }
//     return match;
//  }
//};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false; 
  else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    }
  }
  return true;
};

//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if(keys1.length !== keys2.length) {
    return false;
  }
  for(let item of keys1) {
    if(Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    } else if(object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
}; 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

//const bar = () => 'hi';