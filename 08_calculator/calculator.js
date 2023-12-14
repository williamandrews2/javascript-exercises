const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
};

const multiply = function (numbers) {
  let product = 1;
  numbers.forEach((num) => (product *= num));
  return product;
};

const power = (a, b) => Math.pow(a, b);

const factorial = function (number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
