const { readdirSync, copyFileSync } = require("fs");

const {
  outerPath: { htmlPath },
  innerDir: { htmlDir, rootPath },
} = require("../config");

function createIndexHtml() {
  const _htmlFiles = readdirSync(htmlPath);

  if (_htmlFiles.length) {
    copyFileSync(
      htmlDir + "/" + "/index.html",
      rootPath + "/" + "/index.html",
      0,
      (err) => {
        if (err) {
          throw new Error("File is failed to copy.", err);
        }
      }
    );
    return;
  }
}

module.exports = {
  createIndexHtml,
};
