const ftoc = function(num) {
  let converted = (num - 32) * 5 / 9;
  return Number(converted.toFixed(1))
};

const ctof = function(num) {
  let converted = (num * 9 / 5) + 32;
  return Number(converted.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
