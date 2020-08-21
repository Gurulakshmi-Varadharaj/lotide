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

//Main function that takes array and callback function as input and
//return the array same as takeWhile function in Lodash
const takeUntil = function (arrays, callback) {
  let takeUnitlElm;
  for (let i = 0; i < arrays.length; i++) {
    let array = arrays[i];
    if (callback(array)) {
      takeUnitlElm = i;
      break;
    }
  }
  return (arrays.slice(0, takeUnitlElm));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

const results3 = takeUntil(data1, x => x === 2);
assertArraysEqual(results3, [1]);