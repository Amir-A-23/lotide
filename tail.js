const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  // console.log(newArr); test newArr
  return newArr;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


const num = [1];
tail(num);
assertEqual(num.length, 3);


const empt = [];
tail(empt);
assertEqual(empt.length, 3);


