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

module.exports = middle;