const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function push() {
    const pushSpinner = ora('git push').start();
    try {
        const { stdout: brName } = shell.exec(`git symbolic-ref --short HEAD`);
        const { stderr, code } = shell.exec(`git push --set-upstream origin ${brName}`);

        if (code !== 0) {
            pushSpinner.fail('push failed!');
            throw new Error(stderr);
        }
        pushSpinner.succeed('push succeed!');
        return true;
    } catch (error) {
        return false;
    }
}

export default push;
