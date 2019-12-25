const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const debug = require('debug')('git-pro#src/git/commit.ts');

import prompsConfig from '../config/promps';
import checkAdded from './checkAdded';
import { getRcInfo } from '../utils/gitpro';

let customConfig = getRcInfo();

async function commit() {
    if (!checkAdded()) {
        return;
    }
    const isTextType = customConfig.type === 'text';

    let { type } = await inquirer.prompt(prompsConfig.ciType);

    const prompList = [];
    if (isTextType) {
        prompList.push(prompsConfig.ciScope);
    }
    prompList.push(prompsConfig.ciMsg);

    let { scope, msg } = await inquirer.prompt(prompList);

    const commitSpinner = ora('git commit').start();
    const pref = isTextType ? `${type}${scope ? `(${scope})` : ''}:` : `${type}`;

    let commitMsg = `git commit -m "${pref} ${msg}"`;

    debug(commitMsg);
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
