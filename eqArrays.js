const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false; 
  else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
