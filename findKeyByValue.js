const assertEqual = function(actual, expected) {
  const failed = String.fromCodePoint(0x1F6D1);
  const passed = String.fromCodePoint(0x2705);
  (actual === expected)
    ? console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (obj, value) => {
  //const result = {};
  //console.log(Object.keys(obj));
  for (let keys in obj) {
    if (!obj[keys]) {
      console.log("error");
    } else if (obj[keys] === value) {
      return keys;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "The Expanse");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);