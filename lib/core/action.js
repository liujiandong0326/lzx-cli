const inquirer = require("inquirer");
const config = require("../../config");
const download = require("./download");

const myActive = async (project, args) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "请选择使用的框架",
    },
  ]);
  download(config.frameworkUrl[answer.framework], project);
};

module.exports = myActive;
