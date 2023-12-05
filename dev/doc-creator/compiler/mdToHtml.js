const { writeFileSync } = require("fs");
const { marked } = require("marked");
const highlight = require("highlight.js");
const { myReadFileSync } = require("../utils/file");
const {
  outerPath: { mdPath, htmlPath },
  innerDir: { htmlDir },
} = require("../config/index");

marked.setOptions({
  highlight(code) {
    return highlight.highlightAuto(code).value;
  },
});

function mdToHtml(fileName) {
  const _mdStr = myReadFileSync(`${mdPath}/${fileName}`);
  let _htmlStr = myReadFileSync(`${htmlDir}/md.html`);
  const newHtmlStr = marked.parse(_mdStr);

  console.log("操了", _htmlStr.includes("<!-- md-container  -->"));
  _htmlStr = _htmlStr.replace("<!-- md-container  -->", newHtmlStr);
  writeFileSync(
    `${htmlPath}/${fileName.replace(".md", ".html")}`,
    _htmlStr,
    (err) => {
      if (err) {
        throw new Error("file is failed to write.", err);
      }
    }
  );
}

mdToHtml("/hahha.md");

module.exports = mdToHtml;
