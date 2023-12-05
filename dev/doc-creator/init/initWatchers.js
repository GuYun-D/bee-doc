const { watch } = require("fs");

/**
 * watch是监听文件获取文件夹的变化
 * @param path 需要监听的文件或者文件夹
 * @param cb 当文件或者文件夹发生变化的时候进行调用
 * watch(path, cb)
 *
 *
 * @param event 什么变化了
 * @param filename 变化的文件是什么
 * cb(event, filename)
 */

const {
  outerPath: { htmlPath },
} = require("../config/index");
const { createIndexHtml } = require("../compiler/createHtml");

function initWatchers(options) {
  watchHtml(options);
  watchMarkdown(options);
}

function watchHtml(options) {
  watch(htmlPath, (event, filename) => {
    if (filename) {
        console.log("我也是醉了呀", event);
      createIndexHtml(options, event === "change" ? filename : undefined);
    }
  });
}

function watchMarkdown() {}

module.exports = initWatchers;
