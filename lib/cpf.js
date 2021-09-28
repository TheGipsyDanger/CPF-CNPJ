const {
  clean,
  checkBlacklist,
  checkCPFLength,
  checkIsNotEmpty,
  invalidCPFValues,
} = require("../utils");

function isValid(value) {
  value = clean(value);

  const isValid =
    checkCPFLength(value) &&
    checkIsNotEmpty(value) &&
    checkBlacklist(invalidCPFValues, value);

  if (isValid) {
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(value.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(value.charAt(10))) return false;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isValid,
};
