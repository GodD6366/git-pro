const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const prompsConfig = require('../config/promps');

async function commit() {
    let {
        type
    } = await inquirer.prompt(prompsConfig.ciType);
    let {
        msg
    } = await inquirer.prompt(prompsConfig.ciMsg);

    const commitSpinner = ora('git commit 提交代码').start();
    // console.log(chalk.green('git commit 提交代码...'));
    let commitMsg = `git commit -m "${type} ${msg}"`
    const {
        code,
        stdout,
        stderr
    } = shell.exec(commitMsg);
    console.log(chalk.cyan(`->  ${commitMsg}`));
    if (code !== 0) {
        console.log(stdout);
        // console.log(chalk.red(`✖ 提交失败!`));
        commitSpinner.fail('提交失败!')
        throw new Error(stderr);
    }
    commitSpinner.succeed('提交完成!')
    // console.log(chalk.green(`✔ 提交完成!`));
    return true;
}

module.exports = commit;