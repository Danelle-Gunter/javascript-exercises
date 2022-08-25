const fibonacci = function(nth) {
  // the number is the sum of the two proceeding numbers
  // ie: 1, 1, 2, 3, 5, 8, 13
  // returns the nth number of the series
  
  if (nth < 0) return "OOPS";
  if (nth === 0) return 0;
  
  let first = 0;
  let second = 1;

  for (let i = 1; i < nth; i++) {
    const temp = second;
    second = first + second;
    first = temp;
  }

  return second;
  
};

// Do not edit below this line
module.exports = fibonacci;
