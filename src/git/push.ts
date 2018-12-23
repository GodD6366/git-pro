const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function push() {
    const pushSpinner = ora('git push').start();
    const { stderr, code } = shell.exec(`git push`);

    if (code !== 0) {
        pushSpinner.fail('push failed!');
        throw new Error(stderr);
    }
    pushSpinner.succeed('push succeed!');
    return true;
}

export default push;
