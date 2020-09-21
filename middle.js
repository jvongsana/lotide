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

module.exports = middle;
