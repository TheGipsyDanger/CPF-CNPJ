function clean(document) {
  return document.replace(/[^\d]+/g, "");
}

module.exports = {
  clean,
};
