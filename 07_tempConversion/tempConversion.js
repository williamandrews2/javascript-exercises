const convertToCelsius = function(fahrenheit) {
    tempInCelsius = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
    return tempInCelsius;
};

const convertToFahrenheit = function(celsius) {
    tempInFahrenheit = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
    return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
