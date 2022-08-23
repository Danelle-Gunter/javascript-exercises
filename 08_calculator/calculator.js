const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((total, nextItem) => total * nextItem) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  for (let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
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
