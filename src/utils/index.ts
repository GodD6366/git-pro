const shell = require('shelljs');
const path = require('path');
shell.config.silent = true;

export function getPwd(): string {
    let { stdout } = shell.exec('pwd');
    return stdout.trim();
}

export function getGitProRcPath(): string {
    let rcConfig = path.resolve(getPwd(), '.gitprorc.js');
    return rcConfig;
}
