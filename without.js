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

let without = (source, itemsToRemove) => {
  const updatedSource = source.filter(function(element) {
    return itemsToRemove.indexOf(element) === -1;
  });
  return updatedSource;
};


const numbers = [1, 2, 3, 1, -1];
const mixed = ['Amir', 'Ali', 23, 1993, 6.1];

console.log(without(numbers, [1,3]));
//console.log(without(numbers, [1, 3]));
//assertArraysEqual(numbers, [1120312, 324234, 0.2123, -1]);

console.log(without(mixed, [6.1]));
//assertArraysEqual(mixed, ['Amir', 'Ali', 23, 1993, 6.1]);


//console.log(without([1,2,3], [1, 2]));
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
