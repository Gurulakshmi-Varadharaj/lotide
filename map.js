//Helper Function for Test execution that compare two arrays
const eqArrays = function (array1, array2) {
  let flagLength = 0, flagType = 0, flagValue = 0;
  if (array1.length !== array2.length) {
    flagLength = 1;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (typeof (array1[i]) !== typeof (array2[i])) {
        flagType = 1;
      } else {
        if (array1[i] !== array2[i]) {
          flagValue = 1;
        }
      }
    }
  }
  if (flagLength === 1) {
    return 'flagLength';
  }
  if (flagType === 1) {
    return 'flagType';
  }
  if (flagValue === 1) {
    return 'flagValue';
  }
  if (flagLength === 0 && flagType === 0 && flagValue === 0) {
    return 'Equal';
  }
};

//Test execution Function to check array using helper funtion eqArrays and log the appropriate message
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === 'Equal') {
    console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagType') {
    console.log(`🛑🛑🛑Assertion Failed: Datatype of values is not same for input arrays: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagValue') {
    console.log(`🛑🛑🛑Assertion Failed: Value is different in two input arrays: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagLength') {
    console.log(`🛑🛑🛑Assertion Failed: Length of two input arrays is different: [${array1}] === [${array2}]`);
  }
};

//Main map Function that get Array and callback fnuction and
//Returns a new Array with result based on the logic in callback function
const map = function (array, callback) {
  const result1 = [];
  for (let item of array) {
    result1.push(callback(item));
  }
  return result1;
};

//Test Case
//Scenario 1: callback function gives letter in first index
let words = ["ground", "control", "to", "major", "tom"];
let result = map(words, word => word[0]);
assertArraysEqual(result, ['g', 'c', 't', 'm', 't']);

//scenario 2: callback function gives length of each word
result = map(words, word => word.length);
assertArraysEqual(result, [6, 7, 2, 5, 3]);

//Scenario 3: Different input array
words = ["Life", "is", "adventure"];
result = map(words, word => word.length);
assertArraysEqual(result, [4, 2, 9]);
