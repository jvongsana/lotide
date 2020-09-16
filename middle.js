const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are not equal.");
  }
};


const middle = function(arr) {
  let midArr = [];
  if (arr.length <= 2) {
    return midArr;
  }

  if (arr.length & 2 !== 0) {
    let midPosition = Math.floor(arr.length / 2);
    midArr.push(arr[midPosition]);
  } else {
    let firstMid = (arr.length / 2 - 1);
    let secMid = arr.length / 2;
    midArr.push(arr[firstMid]);
    midArr.push(arr[secMid]);
  }
  return midArr;
};



assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
