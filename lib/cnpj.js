const {
  clean,
  checkBlacklist,
  checkCNPJLength,
  checkIsNotEmpty,
  invalidCNPJValues,
} = require("../utils");

function isValid(value) {
  value = clean(value);

  const isValid =
    checkCNPJLength(value) &&
    checkIsNotEmpty(value) &&
    checkBlacklist(invalidCNPJValues, value);

  if (isValid) {
    let valueLength = value.length - 2;
    let numbers = value.substring(0, valueLength);
    let digits = value.substring(valueLength);
    let acc = 0;
    let pos = valueLength - 7;
    for (let i = valueLength; i >= 1; i--) {
      acc += numbers.charAt(valueLength - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = acc % 11 < 2 ? 0 : 11 - (acc % 11);
    if (result != digits.charAt(0)) return false;

    valueLength = valueLength + 1;
    numbers = value.substring(0, valueLength);
    acc = 0;
    pos = valueLength - 7;
    for (let i = valueLength; i >= 1; i--) {
      acc += numbers.charAt(valueLength - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = acc % 11 < 2 ? 0 : 11 - (acc % 11);

    if (result != digits.charAt(1)) return false;

    return true;
  } else {
    return false;
  }
}

module.exports = {
  isValid,
};
