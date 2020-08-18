//Function to get tail of Array
const tail = function (arrIn) {
  const newArr = arrIn.slice(1);
  return newArr;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// Test Run
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, 1);
assertEqual(1, 10);
let words = ["Yo Yo", "Lighthouse", "Labs"];
(tail(words));
assertEqual(words.length, 3);

words = ["Yo Yo"];
(tail(words));
assertEqual(words.length, 3);

words = [];
(tail(words));
assertEqual(words.length, 3);

