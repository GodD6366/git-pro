const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function add(files = '.') {
    const addSpinner = ora('git add 暂存代码').start();
    const {
        stderr,
        code
    } = shell.exec(`git add ${files}`);
    if (code !== 0) {
        addSpinner.fail('暂存失败!')
        throw new Error(stderr);
    }
    addSpinner.succeed('暂存完成!');
    return true;
}

module.exports = add;