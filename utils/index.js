const invalid = require("./invalid");
const check = require("./check");
const { clean } = require("./clean");

module.exports = {
  clean,
  ...invalid,
  ...check,
};
