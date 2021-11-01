const assertArraysEqual = function(array1, array2) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);


  (eqArrays(array1, array2) === true)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${array1} === ${array2}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${array1} !== ${array2}`);
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

const middle = (inputArray) => {
  const middleArray = [];
  if (inputArray.length <= 2) {
    return middleArray;
  } else if (inputArray.length % 2 === 1) {
    middleArray.push(inputArray[Math.floor(inputArray.length / 2)]);
  } else if (inputArray.length % 2 === 0) {
    middleArray.push(inputArray[inputArray.length / 2 - 1]);
    middleArray.push(inputArray[inputArray.length / 2]);
  }
  return middleArray;
};

const testArray1 = [1,2,3,4,5,6];
console.log(testArray1.length);
assertArraysEqual(middle(testArray1), [3,4]);

const testArray2 = [1,2,3,4,5];
assertArraysEqual(middle(testArray2), [3]);

const testArray3 = [1,2];
assertArraysEqual(middle(testArray3), []);

const testArray4 = [1];
assertArraysEqual(middle(testArray4), []);


const testArray5 = [];
assertArraysEqual(middle(testArray5), []);

