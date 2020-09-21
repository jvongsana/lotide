const tail = function(arr) {
  let tailArr =  [...arr];
  return tailArr.slice(1);
};

module.exports = tail;