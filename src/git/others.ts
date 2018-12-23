const shell = require('shelljs');
const ora = require('ora');

function other(action: String = '', cmd: any) {
    let args: Array<String> = cmd.parent.rawArgs;
    let argsStr = args.slice(args.indexOf(action) + 1).join(' ');
    shell.config.silent = false;
    let execCmd = `git ${action} ${argsStr}`;
    shell.exec(execCmd);
}

export default other;
