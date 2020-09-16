const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  // logic to update results here
  for (const letter of sentence) {
    if (letter === " ") {
      position++;
    } else if (results[letter]) {
      results[letter].push(position);
      position++;
    } else {
      results[letter] = new Array();
      results[letter].push(position);
      position++;
    }
  }
  console.log(results);
};

letterPositions("lighthouse in the house");

console.log({
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
});