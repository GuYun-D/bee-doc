const { readdirSync, copyFileSync, writeFileSync } = require("fs");
const {
  createMenuItem,
  replaceHtml,
  createIfame,
} = require("../utils/template");
const { title } = require("../config");
const {
  outerPath: { htmlPath, rootPath },
  innerDir: { htmlDir },
  regexp: { reg_ulContent },
} = require("../config");
const { myReadFileSync } = require("../utils/file");

function createIndexHtml(options) {
  const _htmlFiles = readdirSync(htmlPath);

  if (!_htmlFiles.length) {
    copyFileSync(
      htmlDir + "/" + "index.html",
      rootPath + "/" + "index.html",
      0,
      (err) => {
        if (err) {
          throw new Error("File is failed to copy.", err);
        }
      }
    );
    return;
  }

  const _indexHtmlStr = myReadFileSync(htmlDir + "/index.html");

  let menuListStr = "";
  let newHtml = "";

  _htmlFiles.map((filename, index) => {
    menuListStr += createMenuItem(filename, options.domain, options.port, true);
  });

  newHtml = _indexHtmlStr.replace("<!--menu list-->", menuListStr);
  newHtml = newHtml.replaceAll("<!--doc title-->", options.title || title);
  newHtml = newHtml.replace(
    "<!--iframe page-->",
    createIfame(_htmlFiles[0], options.domain, options.port)
  );

  // 写入文件
  writeFileSync(rootPath + "/index.html", newHtml, (err) => {
    if (err) {
      throw new Error("file is failed to write.", err);
    }
  });
}

module.exports = {
  createIndexHtml,
};
