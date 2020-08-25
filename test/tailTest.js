const assertEqual = require('../assertEqual');

const tail = require('../tail');

// Test Run
let words = ["Yo Yo", "Lighthouse", "Labs"];
(tail(words));
assertEqual(words.length, 3);

words = ["Yo Yo"];
(tail(words));
assertEqual(words.length, 3);

words = [];
(tail(words));
assertEqual(words.length, 3);