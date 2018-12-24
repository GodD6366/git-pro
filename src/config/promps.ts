// emoji 参考 https://gitmoji.carloscuesta.me/
import { getRcInfo } from '../utils/gitpro';
import { choices } from '../template/commitType';

let customConfig = getRcInfo();

export default {
    ciType: [
        Object.assign(
            {
                type: 'list',
                name: 'type',
                message: '请选择本次提交的类型:',
                choices,
            },
            customConfig.commitList
        ),
    ],
    ciMsg: Object.assign(
        {
            type: 'input',
            name: 'msg',
            message: '请输入提交文本:',
            validate: function(value: String) {
                if (value) {
                    return true;
                }
                return '文本必须输入!';
            },
        },
        customConfig.commitMessage
    ),
};
