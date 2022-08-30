const myActive = require("./active");

const myCommander = function (program) {
  program
    .command("create <project> [other...]")
    .alias("crt")
    .description("创建项目")
    .action(myActive);
};

module.exports = myCommander;
