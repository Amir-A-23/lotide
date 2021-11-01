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

module.exports = middle;
