const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
import chalk from 'chalk';
import add from '../git/add';
import commit from '../git/commit';
import pull from '../git/pull';
import others from '../git/others';

let pkPath = path.resolve(__dirname, '../../package.json');
let version = fs.readJsonSync(pkPath).version;
program.version(version).usage('<command> [options]');

// 需要暂存的文件
let addFiles = '';

program
    .command('commit [options]')
    .description('创建一次Git提交')
    .option('-a, --add [items]', '是否暂存文件', (files: String = '') => {
        addFiles = files.split(',').join(' ');
        return !!addFiles;
    })
    .option('-p, --pull', '提交前先拉取最新代码,在提交')
    .action((name: String, cmd: any) => {
        try {
            cmd.pull && pull();
            cmd.add && add(addFiles);
            commit();
        } catch ({ message }) {
            console.log(chalk.red('\n' + message));
            process.exit(0);
        }
    });

program.command('*').action(others);

program.parse(process.argv);

export default program;
