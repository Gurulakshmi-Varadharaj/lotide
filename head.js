//Head Funtion to get head value of input Array
const head = function (arrIn) {
  return arrIn[0];
};

//Pass the head variable to the assertEqual function
const assertEqual = function (head, expected) {
  if (head === expected) {
    console.log(`✅✅✅Assertion Passed: "${head}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${head}" !== "${expected}"`);
  }
};

// Test Run
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, 1);
assertEqual(1, 10);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 5);
assertEqual(head([]), "Hello");
