const { mkdirSync, existsSync } = require("fs");

const {
  outerPath: { srcPath, jsPath, htmlPath, mdPath, cssPath },
} = require("../config");

/**
 * 创建对应文件夹
 * 不存在就创建
 */
function initFolders() {
  if (!existsSync(srcPath)) {
    createFolder(srcPath);
  }

  if (!existsSync(jsPath)) {
    createFolder(jsPath);
  }

  if (!existsSync(htmlPath)) {
    createFolder(htmlPath);
  }

  if (!existsSync(mdPath)) {
    createFolder(mdPath);
  }

  if (!existsSync(cssPath)) {
    createFolder(cssPath);
  }
}

function createFolder(path) {
  mkdirSync(path, (err) => {
    if (err) {
      throw new Error("Folder is failed to create.", err);
    }
  });
}

module.exports = initFolders;
