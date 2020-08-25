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

module.exports = eqArrays;