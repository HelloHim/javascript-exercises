const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, item, index) => {
    accumulator += item;
    return accumulator;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((accumulator, item, index) => {
    if (index !== 0) {
      accumulator *= item;
    }
    return accumulator;
  })
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
  if (x == 0) {
    return 1
  } else {
    const wholeNumbersBelowX = []
    for (i = 1; i <= x; i++) {
      wholeNumbersBelowX.push(i);
    }
    return wholeNumbersBelowX.reduce((accumulator, item, index) => {
      if (index !== 0) {
        accumulator *= item;
      }
      return accumulator;
    })
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
