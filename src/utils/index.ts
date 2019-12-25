const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const userHome = require('user-home');
const debug = require('debug')('git-pro#src/utils/index.ts');

shell.config.silent = true;

export const CONFIG_FILE_NAME = '.gitprorc.js';

export function getPwd(): string {
    let { stdout } = shell.exec('pwd');
    return stdout.trim();
}

export function getGitProRcPath(): string {
    let parentDir = getPwd();
    let rcConfig = '';

    debug('parentDir', parentDir);
    debug('userHome', userHome);

    while (!rcConfig || (!fs.existsSync(rcConfig) && parentDir !== userHome)) {
        parentDir = path.dirname(path.dirname(rcConfig));
        debug('尝试在父级目录读取 ".gitprorc.js"', rcConfig);
        rcConfig = path.resolve(parentDir, '.gitprorc.js');
    }

    debug('rcConfig', rcConfig);
    return rcConfig;
}
