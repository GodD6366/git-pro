const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function add(files = '.') {
    const addSpinner = ora('git add').start();
    const {
        stderr,
        code
    } = shell.exec(`git add ${files}`);
    if (code !== 0) {
        addSpinner.fail('add failed!')
        throw new Error(stderr);
    }
    addSpinner.succeed('add succeed!');
    return true;
}

module.exports = add;