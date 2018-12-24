const shell = require('shelljs');

/**
 * 代理其他git命令
 * @param action git 命令
 */
function gitProxy(action: String = '') {
    let args: Array<String> = process.argv;
    let argsStr = args.slice(args.indexOf(action) + 1).join(' ');
    shell.config.silent = false;
    let execCmd = `git ${action} ${argsStr}`;
    shell.exec(execCmd);
}

export default gitProxy;
