export const defaultArray = [...Array(10).keys()];

export const invalidCPFValues = defaultArray.map((item) =>
  String(item).repeat(11)
);

export const invalidCNPJValues = defaultArray.map((item) =>
  String(item).repeat(14)
);
