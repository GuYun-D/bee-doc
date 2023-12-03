const { readdirSync, copyFileSync } = require("fs");
const {
  outerPath: { cssPath, jsPath, htmlPath },
  innerDir: { jsDir, cssDir, htmlDir },
} = require("../config");
const { createIndexHtml } = require("../compiler");

function initFiles() {
  copyFile("css");
  copyFile("js");
  createIndexHtml()
  // 当项目中的html文件不存在的时候在进行拷贝
  copyWelcomePage();
}

/**
 * css， js文件复制
 * @param {*} filed
 */
function copyFile(filed) {
  let _innerFiles = [];
  let _outerFiles = [];
  let _dir = "";
  let _path = "";

  switch (filed) {
    case "css":
      _dir = cssDir;
      _path = cssPath;
      _innerFiles = readdirSync(cssDir);
      _outerFiles = readdirSync(cssPath);
      break;
    case "js":
      _dir = jsDir;
      _path = jsPath;
      _innerFiles = readdirSync(jsDir);
      _outerFiles = readdirSync(jsPath);
      break;
    default:
      break;
  }

  // 如果innerr存在的目录outer不存在，那么就进行copy
  _innerFiles.map((innerFile) => {
    if (_outerFiles.indexOf(innerFile) === -1) {
      copyFileSync(
        _dir + "/" + innerFile,
        _path + "/" + innerFile,
        0,
        (err) => {
          if (err) {
            throw new Error("File is failed to copy.", err);
          }
        }
      );
    }
  });
}

function copyWelcomePage() {
  const _htmlFiles = readdirSync(htmlPath);
  if (!_htmlFiles.length) {
    copyFileSync(
      htmlDir + "/" + "welcome.html",
      htmlPath + "/" + "welcome.html",
      0,
      (err) => {
        if (err) {
          throw new Error("File is failed to copy.", err);
        }
      }
    );
  }
}

module.exports = initFiles;
