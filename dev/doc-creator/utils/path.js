const path = require("path");

const resolve = (filePath, rootPath = __dirname) => {
  return path.resolve(rootPath, filePath);
};

module.exports = {
  resolve,
};
