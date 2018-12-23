const program = require('commander');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const {
    add,
    commit,
    pull
} = require('../git/index');

let package = fs.readJSONSync(path.resolve(__dirname, '../../package.json'));

program.version(package.version).usage('<command> [options]');

program
    .command('commit [options]')
    .description('创建一次Git提交')
    .option('-a, --add', '是否暂存文件')
    .option('-f, --files <items>', '暂存文件', files => {
        let addFiles = files.split(',').join(' ');
        return addFiles;
    })
    .option('-p, --pull', '提交前先拉取最新代码,在提交')
    .action((name, cmd) => {
        try {
            cmd.pull && pull();
            cmd.add && add(cmd.files);
            commit();
        } catch ({
            message
        }) {
            console.log(chalk.red('\n' + message))
            process.exit(0)
        }
    });

program.parse(process.argv);