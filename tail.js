const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  // console.log(newArr); test newArr
  return newArr;
};

module.exports = tail;


