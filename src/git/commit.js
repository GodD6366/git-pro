const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const prompsConfig = require('../config/promps');

async function commit() {
    let addStdout = shell.exec('git status').stdout
    if (addStdout.indexOf('no changes added to commit') > 0) {
        ora().fail(
            `no changes added to commit! please use:
    git-tools commit -a [files]
to retry!`);
        return;
    }
    if (addStdout.indexOf('nothing to commit') > 0) {
        ora().fail(`nothing to commit, working tree clean`);
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