const { resolve } = require("../utils/path");

const port = process.env.npm_config_port;
const domain = "http://localhost";
const title = "Bee Doc";

/**
 *  项目
 *  - src
 *    | -------- css
 *    | -------- js
 *    | -------- html
 *  - workspace
 */
const outerPath = {
  rootPath: resolve("../../../"),
  srcPath: resolve("../../../src"),
  htmlPath: resolve("../../../src/html"),
  jsPath: resolve("../../../src/js"),
  cssPath: resolve("../../../src/css"),
  mdPath: resolve("../../../workspace"),
};

/**
 * 插件
 *  - temp-files
 *        | ---------- html
 *        | ---------- css
 *        | ---------- js
 */
const innerDir = {
  rootPath: resolve("../temp_files"),
  htmlDir: resolve("../temp_files/html"),
  cssDir: resolve("../temp_files/css"),
  jsDir: resolve("../temp_files/js"),
};

module.exports = {
  title,
  port,
  domain,
  outerPath,
  innerDir,
};
