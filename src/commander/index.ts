const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
import chalk from 'chalk';
import add from '../git/add';
import commit from '../git/commit';
import pull from '../git/pull';
import push from '../git/push';
import gitProxy from '../git/gitProxy';
import { init } from '../utils/gitpro';

let pkPath = path.resolve(__dirname, '../../package.json');
let version = fs.readJsonSync(pkPath).version;
program.version(version).usage('<command> [options]');

// 需要暂存的文件
let addFiles = '';

program
    .command('commit [options]')
    .description('进行一次Git提交')
    .option('-a, --add [items]', '暂存文件', (files: String = '') => {
        addFiles = files.split(',').join(' ');
        return !!addFiles;
    })
    .option('-p, --pull', '提交前,先拉取最新代码')
    .option('-s, --push', '提交完成后,推送代码')
    .action((name: String, cmd: any) => {
        try {
            cmd.pull && pull();
            cmd.add && add(addFiles);
            commit().then(() => {
                cmd.push && push();
            });
        } catch ({ message }) {
            console.log(chalk.red('\n' + message));
            process.exit(0);
        }
    });

program
    .command('custom [options]')
    .description('进行一些自定义配置')
    .option('-g, --glob', '全局')
    .action((name: String, cmd: any) => {
        init(cmd || {});
    });

/**
 * 其他git命令代理
 */
program
    .command('*')
    .description('代理其他git操作')
    .action(gitProxy);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp((text: string) => {
        return chalk.red(text);
    });
}

export default program;
