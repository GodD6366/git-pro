const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const prompsConfig = require('../config/promps');

async function commit() {

    if (shell.exec('git status').stdout.indexOf('no changes added to commit') > 0) {
        ora().fail(
            `没有已暂存的文件用于提交!请使用:
    git-tools commit -a [files]
进行提交!`);
        return;
    }

    let {
        type
    } = await inquirer.prompt(prompsConfig.ciType);
    let {
        msg
    } = await inquirer.prompt(prompsConfig.ciMsg);

    const commitSpinner = ora('git commit 提交代码').start();
    let commitMsg = `git commit -m "${type} ${msg}"`
    const {
        code,
        stdout,
        stderr
    } = shell.exec(commitMsg);
    if (code !== 0) {
        commitSpinner.fail('提交失败!')
        console.log(chalk.cyan(`->  ${commitMsg}`));
        throw new Error(stdout + '\n' + stderr);
    }
    commitSpinner.succeed('提交完成!')
    return true;
}

module.exports = commit;