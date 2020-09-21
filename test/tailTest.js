const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 and expecting 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] but expects ['Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});