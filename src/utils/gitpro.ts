import { getGitProRcPath, CONFIG_FILE_NAME } from './index';
import RC_TEMPLATE from '../template/rc';
const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');
const userHome = require('user-home');
const debug = require('debug')('git-pro#src/utils/gitpro.ts');

export function init({ glob = false }) {
    let config = '';
    debug('glob', glob);
    if (glob) {
        config = path.join(userHome, CONFIG_FILE_NAME);
    } else {
        config = path.join(process.cwd(), CONFIG_FILE_NAME);
    }

    if (fs.existsSync(config)) {
        console.log('文件已经存在', config);
    } else {
        fs.outputFileSync(config, RC_TEMPLATE);
        shell.exec(`prettier --write ${config}`);
    }
}

export function getRcInfo() {
    let config: string = getGitProRcPath();
    let rcConfig = {};
    if (fs.existsSync(config)) {
        debug('配置文件存在');
        rcConfig = require(config);
    }
    return Object.assign(
        {
            type: 'emoji',
            messages: {} as any,
            scopes: [],
        },
        rcConfig
    );
}
