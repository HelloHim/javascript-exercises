const convertToCelsius = function(fahrenheitNum) {
  let celsiusNum = ((fahrenheitNum - 32) / (1.8))
  return Math.round(celsiusNum * 10) / 10;
};

const convertToFahrenheit = function(celsiusNum) {
  let fahrenheitNum = ((celsiusNum * 1.8) + (32))
  return Math.round(fahrenheitNum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
