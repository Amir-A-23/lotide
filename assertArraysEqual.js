const assertArraysEqual = function(array1, array2) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);


  (eqArrays(array1, array2) === true)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${array1} === ${array2}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${array1} !== ${array2}`);
};


let eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) return false; 
  else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
