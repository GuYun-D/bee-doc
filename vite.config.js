const { BeeDocCreator } = require("./dev/doc-creator");

module.exports = {
  plugins: [
    new BeeDocCreator({
      title: "test",
      port: 3333,
      domain: "http://www.baidu.com",
    }),
  ],
};
