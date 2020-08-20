//Helper Function that compares two arrays
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

//Helper Function to comparee two objects
const eqObjects = function (object1, object2) {
  let objKey1 = [], objKey2 = [];
  objKey1 = Object.keys(object1);
  objKey2 = Object.keys(object2);
  if (objKey1.length !== objKey2.length) {
    return false;
  } else {
    for (let key1 in object1) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        if (eqArrays(object1[key1], object2[key1])) {
          return true;
        } else {
          return false;
        }
      } else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
    return true;
  }
};

//Function to get two Objects, compare using helper functions and return Object for Test case
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // To see the actual object instead of object Object
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Test Run
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);// => Pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => Fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => Pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => Fail