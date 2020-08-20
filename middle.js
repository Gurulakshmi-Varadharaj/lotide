//Helper Function that compare the values of two arrays
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

//Function to get middle value of an Array using helper funtion middle and eqArrays and log the message
const assertEqual = function (actual, expected) {
  let middleArr = [];
  middleArr = middle(actual);
  if (eqArrays(middleArr, expected)) {
    console.log(`✅✅✅Assertion Passed: Middle of Array [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Helper function to get the middle value of an input Array
const middle = function (inpArr) {
  let midElmArr = [];
  if (inpArr.length <= 2) {
    return midElmArr;
  } else if (inpArr.length % 2 === 0) {
    for (let i = 0; i < inpArr.length; i++) {
      if (i === ((inpArr.length / 2) - 1) || i === (inpArr.length / 2)) {
        midElmArr.push(inpArr[i]);
      }
    }
    return midElmArr;
  } else {
    for (let i = 0; i < inpArr.length; i++) {
      if (i === Math.floor((inpArr.length / 2))) {
        midElmArr.push(inpArr[i]);
      }
    }
    return midElmArr;
  }
};

//Test Run
assertEqual([], []);
assertEqual([1], []);
assertEqual([1, 2], []);
assertEqual([1, 2, 3, 4], [2, 3]);
assertEqual([1, 2, 3, 4, 5], [3]);
assertEqual([1, 2, 3, 4, 5, 6], [3, 4]);
assertEqual([1, 2, 3, 4, 5, 6, 7], [4]);