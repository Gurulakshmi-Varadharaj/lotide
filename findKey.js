//Test Exection function to check the actual and expected result
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//Main Function that get the first key of the value using callback function
const findKey = function (objectInp, callBack) {
  for (const property in objectInp) {
    if (callBack(objectInp[property])) {
      return property;
    }
  }
};

//Test Scenario
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), "noma");

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3)), "Akaleri");