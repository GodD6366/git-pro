const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function pull() {
    const pullSpinner = ora('git pull 拉取代码中...').start();
    const {
        stderr,
        code
    } = shell.exec(`git pull`);

    // const res = shell.exec(`git pull`);
    // console.log(res.stderr);
    if (code !== 0) {
        pullSpinner.fail('代码拉取失败!')
        throw new Error(stderr);
    }
    pullSpinner.succeed('代码拉取完成!');
    return true;
}

module.exports = pull;