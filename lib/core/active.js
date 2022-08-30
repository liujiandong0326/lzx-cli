const inquirer = require("inquirer");

const myActive = (project, args) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        choices: ["express", "koa", "egg"],
        message: "请选择使用的框架",
      },
    ])
    .then((answer) => {
      console.log(answer);
    });
};

module.exports = myActive;
