const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

let eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    let match = true;
    for (let i = 0; i < arrayOne.length; i++) {
      console.log('Array One:', arrayOne[i], 'Array Two:', arrayTwo[i]);
      if (arrayOne[i] === arrayTwo[i]) {
        //console.log('Array One:', arrayOne[i], 'Array Two:', arrayTwo[i]);
        match = true;
      } else {
        match = false;
        return match;
      }
    }
    return match;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 3]), true); // => should PASS
