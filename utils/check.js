function checkBlacklist(blacklist, value) {
  return !blacklist.includes(value);
}

function checkIsNotEmpty(value) {
  return value !== "";
}

function checkCPFLength(value) {
  return value.length === 11;
}

function checkCNPJLength(value) {
  return value.length === 14;
}

module.exports = {
  checkBlacklist,
  checkCPFLength,
  checkCNPJLength,
  checkIsNotEmpty,
};
