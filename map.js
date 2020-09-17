const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  // empty for now :)
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word + ' test');


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(results3, ["ground test", "control test", "to test", "major test", "tom test"]);
