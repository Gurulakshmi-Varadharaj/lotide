//Function to compare the actual and expected result and log to the terminal
const assertEqual = function (eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`✅✅✅Assertion Passed: "${eqArrays}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${eqArrays}" !== "${expected}"`);
  }
};

//Helper Function that compare the values of two arrays
const eqArrays = function (array1, array2) {
  let flagFalse = 0;
  if (array1.length !== array2.length) {
    flagFalse = 1;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        flagFalse = 1;
      }
    }
    if (flagFalse === 1) {
      return false;
    } else {
      return true;
    }
  }
};

// Test Run
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false