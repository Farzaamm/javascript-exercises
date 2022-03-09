const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return Math.abs(a - b)
};

const sum = function(array) {
	let sum = 0
  for (let i of array){
    sum += i
  }
  return sum
};

const multiply = function(array) {
  let product = 1
  for (let i of array){
    product *= i
  }
  return product
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
  if (num === 1 || num === 0){
    return 1
  }
  return num * factorial(num - 1)
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
