

const letterPositions = function(str) {
  const results = {};
 
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= "a" && str.charAt(i) <= "z" || str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
      const keyVal = str[i];
      if (!results[keyVal]) {
        results[keyVal] = [i];
      } else {
        results[keyVal].push(i);
      }
    }
  }
  return results;
};

const word = " Hello";
console.log(letterPositions(word));

const sentence = "HeH!!0. W0rLle3E!";
console.log(letterPositions(sentence));