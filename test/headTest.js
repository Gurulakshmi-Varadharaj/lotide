//Import Test Exection function from lotide/assertEqual.js
const assertEqual = require('../assertEqual');

//Import main function from lotide/head.js
const head = require('../head');

// Test Run
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([]), "Hello");