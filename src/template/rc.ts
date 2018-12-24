import { choices } from './commitType';

const RC_TEMPLATE = `
module.exports = {
    commitList: {
        // message: '选择本次提交的类型:',
        choices: ${JSON.stringify(choices)}
    },
    commitMessage: {
        // message: '请输入提交文本:',
    }
};
`;

export default RC_TEMPLATE;
