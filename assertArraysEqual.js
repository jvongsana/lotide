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



// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL


