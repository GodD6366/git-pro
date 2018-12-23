const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function pull() {
    const pullSpinner = ora('git pull').start();
    const { stderr, code } = shell.exec(`git pull`);

    // const res = shell.exec(`git pull`);
    // console.log(res.stderr);
    if (code !== 0) {
        pullSpinner.fail('pull failed!');
        throw new Error(stderr);
    }
    pullSpinner.succeed('pull succeed!');
    return true;
}

export default pull;
