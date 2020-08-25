const eqArrays = require('./eqArrays');

//Test Exection Function to check array using helper funtion eqArrays and log the appropriate message
const assertArraysEqual = function (array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
    } else {
        console.log(`🛑🛑🛑Assertion Failed: As two arrays are not equal: [${array1}] === [${array2}]`);
    }
};

module.exports = assertArraysEqual;

//Test Run
/*assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], []);*/