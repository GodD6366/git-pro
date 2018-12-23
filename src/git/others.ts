const shell = require('shelljs');
const ora = require('ora');

function other(cmd: String = '') {
    shell.config.silent = false;
    let execCmd = `git ${cmd}`;
    shell.exec(execCmd);
}

export default other;
