const { initFiles, initFolders, initWatchers } = require("./init");

class BeeDocCreator {
  constructor(options) {
    this.options = {
      title: undefined,
      port: 0,
      domain: undefined,
    };

    if (options) {
      Object.assign(this.options, options);
    }

    console.log("来了老弟", this.options);

    this.initailze();
  }

  initailze() {
    // 创建工作文件夹
    initFolders(this.options);
    // 创建各种源代码文件
    initFiles(this.options);
    // 创建监听器监听workspace目录的变化
    initWatchers(this.options);
  }
}

module.exports = {
  BeeDocCreator,
};
