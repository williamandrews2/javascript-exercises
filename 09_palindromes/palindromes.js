const palindromes = function (str) {
  let normalString = str.toLowerCase().replace(/[\W_]/g, "");
  let reverseString = normalString.split("").reverse().join("");
  return normalString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
