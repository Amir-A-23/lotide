// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line

  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);

  (eqObjects(actual, expected) === true)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

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

assertObjectsEqual(ab,ba);