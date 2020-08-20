//Helper function to check actual and expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//Count number of letters in the input sentence and return the object with letter: counter pairs
const countLetters = function (sentence) {
  let countLetter = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (countLetter[letter]) {
        countLetter[letter] += 1;
      } else {
        countLetter[letter] = 1;
      }
    }
  }
  return countLetter;
};

//Test Run
let result = countLetters("lighthouse in the house");
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);
assertEqual(result['z'], 1);
assertEqual(result['n'], 0);