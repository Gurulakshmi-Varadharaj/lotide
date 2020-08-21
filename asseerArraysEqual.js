//Helper Function that compare two arrays
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

//Test Exection Function to check array using helper funtion eqArrays and log the appropriate message
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === 'Equal') {
    console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagType') {
    console.log(`🛑🛑🛑Assertion Failed: Datatype of Values is not same for input Arrays: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagValue') {
    console.log(`🛑🛑🛑Assertion Failed: Value is different in two input arrays: [${array1}] === [${array2}]`);
  } else if (eqArrays(array1, array2) === 'flagLength') {
    console.log(`🛑🛑🛑Assertion Failed: Length of two input arrays is different: [${array1}] === [${array2}]`);
  }
};

//Test Run
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], []);