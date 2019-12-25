import { textTypes } from './commitType';

const RC_TEMPLATE = `
module.exports = {
    // 目前只有两种类型 text / emoji
    type: 'emoji',
    messages: {
        type: '选择一种你的提交类型:',
        scopeList: '选择一个scope (可选):',
        scope: '请输入scope (可选):',
        subject: '请输入提交信息:',
    }
};
`;

export default RC_TEMPLATE;
