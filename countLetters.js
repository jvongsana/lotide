// AssertEqual will not work when comparing objects as there are never two same objects.
// However the console.log() inside of assertEqual() prints out the actual and expected outcomes and they are visually idential.

const assertEqual = function(actual, expected) {
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let noSpaces = str.split(" ").join("");
  let letters = {};
  
  for (const letter of noSpaces) {
    if (letters[letter]) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});