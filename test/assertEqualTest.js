const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("ABC", "ABC");
assertEqual(1, 15);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);