const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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
