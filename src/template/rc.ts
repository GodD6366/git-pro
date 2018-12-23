const RC_TEMPLATE = `
module.exports = {
    commitList: {
        // message: 'please 选择本次提交的类型:',
        choices: [
            {
                name: '🚧  工作进行中',
                value: ':construction:'
            },
            {
                name: '🐛  修复 bug',
                value: ':bug:'
            },
            {
                name: '✨  引入新特性',
                value: ':sparkles:'
            },
            {
                name: '🔧  更改配置文件',
                value: ':wrench:'
            },
            {
                name: '📝  撰写文档',
                value: ':memo:'
            },
            {
                name: '📦  更新打包文件',
                value: ':package:'
            }
        ]
    },
    commitMessage: {
        // message: '请输入提交文本:',
    }
};
`;

export default RC_TEMPLATE;
