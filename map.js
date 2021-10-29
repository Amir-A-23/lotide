// map function takes 2 paramaters
//the array to map
//the callback function
//return new array based on results of callback

const assertArraysEqual = function(array1, array2) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);

  console.log('This is array 1:', array1);
  console.log('The length of array 1 is:', array1.length);
  
  console.log('This is array 2: ', array2);
  console.log('The length of array 2 is:', array2.length);


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


const map = function(array, callback) {

  //console.log('array:', array);
  //console.log('callback:', callback.toString());


  const results = [];
  for (let item of array) {
    if (typeof item !== 'string') {
      //console.log('not a string:', item);
      item = item.toString();
      results.push(callback(item));
    } else if (item !== "") {
      results.push(callback(item));
      //console.log('item BEFORE: ', item);
      //console.log('item AFTER: ', callback(item));
      //console.log('---');
    }
  }
  return results;
};



const words = ["ground", "control", "to", "major", "tom"];
const numbers = [123, 234, 345, 456, 567];
const emptyWords = ["A", "", "M", "", "R"];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num[0]);
const results3 = map(emptyWords, empty => empty[0]);



console.log(results1);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results2, ['1', '2', '3', '4', '5']));
console.log(assertArraysEqual(results3, ['A','M','R']));
