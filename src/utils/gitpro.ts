import { getGitProRcPath } from './index';
import RC_TEMPLATE from '../template/rc';
const shell = require('shelljs');
const fs = require('fs-extra');

export function init() {
    let config = getGitProRcPath();
    if (fs.existsSync(config)) {
        console.log('文件已经存在');
    } else {
        fs.outputFileSync(config, RC_TEMPLATE);
        shell.exec(`prettier --write ${config}`);
    }
}

export function getRcInfo() {
    let config: string = getGitProRcPath();
    if (fs.existsSync(config)) {
        // fs.readFileSync(config, 'utf-8');
        let rcConfig = require(config);
        // return {
        //     commitList: {
        //         message: rcConfig.commitList.message,
        //         choices: rcConfig.commitList.choices
        //     },
        //     commitMessage: { message: rcConfig.commitMessage.message }
        // };
        return {
            commitList: rcConfig.commitList || {},
            commitMessage: rcConfig.commitMessage || {},
        };
    }
    return {};
}
