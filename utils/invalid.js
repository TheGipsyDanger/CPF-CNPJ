const defaultArray = [...Array(10).keys()];

const invalidCPFValues = defaultArray.map((item) =>
  String(item).repeat(11)
);

const invalidCNPJValues = defaultArray.map((item) =>
  String(item).repeat(14)
);

module.exports = {
  defaultArray,
  invalidCPFValues,
  invalidCNPJValues
}
