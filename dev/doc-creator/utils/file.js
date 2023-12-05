const { readFileSync } = require("fs");

function myReadFileSync(path) {
  return readFileSync(path, "utf-8");
}

module.exports = {
  myReadFileSync,
};
