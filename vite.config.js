const { BeeDocCreator } = require("./dev/doc-creator");

module.exports = {
  plugins: [
    new BeeDocCreator({
      title: "test",
    }),
  ],
};
