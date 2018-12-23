const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
import prompsConfig from '../config/promps';
import checkAdded from './checkAdded';

async function commit() {
    if (!checkAdded()) {
        return;
    }

    let { type } = await inquirer.prompt(prompsConfig.ciType);
    let { msg } = await inquirer.prompt(prompsConfig.ciMsg);

    const commitSpinner = ora('git commit').start();
    let commitMsg = `git commit -m "${type} ${msg}"`;
    const { code, stdout, stderr } = shell.exec(commitMsg);
    if (code !== 0) {
        commitSpinner.fail('commit failed!');
        console.log(chalk.cyan(`->  ${commitMsg}`));
        throw new Error(stdout + '\n' + stderr);
    }
    commitSpinner.succeed('commit succeed!');
    return true;
}

export default commit;
