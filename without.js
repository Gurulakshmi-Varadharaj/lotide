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

//Function to check array using helper funtion eqArrays and log the message with input array values
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`No Items found to remove as [${array1}] === [${array2}]`);
  } else {
    console.log(`Items to be removed from source are: [${without(array1, array2)}]`);
  }
};

const without = function (source, itemToRemove) {
  let itemRemoveArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemToRemove[i]) {
      itemRemoveArr.push(source[i]);
    }
  }
  return itemRemoveArr;
};

//Test Run
assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual(["1", "2", "3",], [1, 2, "3"]);
assertArraysEqual(["1", "2", "3",], []);
assertArraysEqual([], [1, 2, "3"]);

//To check whether input Array remains same
const words = ["hello", "world", "lighthouse"];
(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
