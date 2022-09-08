const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let total = 0;
  return arr.reduce((prevVal,currVal) => prevVal + currVal, total);
};

const multiply = function(arr) {
  let total = 1;
  return arr.reduce((prevVal, currVal) => prevVal * currVal , total);
};

const power = function(base, exp) {
	let res = 1;
  
  for(let i = 0; i < exp; i++){
      res *= base;
  }
  return res;
};

const factorial = function(num) {
  let res = 1;

  for(let i = num; i > 0; i--){
    res *= i;
  }
  return res;
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