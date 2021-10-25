const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(passed + passed + passed + " Assertion Passed: " + actual + " === " + expected)
    : console.log(failed + failed + failed + " Assertion Failed: " + actual + " !== " + expected);
};


//Test Code

assertEqual("Amir", "Amir");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(10, 50);