const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(arr) {
  if (arr === undefined || arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 6);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");