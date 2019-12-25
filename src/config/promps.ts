// emoji 参考 https://gitmoji.carloscuesta.me/
import { getRcInfo } from '../utils/gitpro';
import { emojiTypes, textTypes } from '../template/commitType';
const debug = require('debug')('git-pro#src/config/promps.ts');

let customConfig = getRcInfo();
debug('customConfig', customConfig);

export default {
    ciType: [
        {
            type: 'list',
            name: 'type',
            message: customConfig.messages.type || '选择一种你的提交类型:',
            choices: customConfig.type === 'emoji' ? emojiTypes : textTypes,
        },
    ],
    ciScope:
        customConfig.scopes.length > 0
            ? (() => {
                  customConfig.scopes.unshift({
                      name: '--跳过--',
                      value: '',
                  });
                  return {
                      type: 'list',
                      name: 'scope',
                      message: customConfig.messages.scopeList || '选择一个scope (可选):',
                      choices: customConfig.scopes,
                  };
              })()
            : {
                  type: 'input',
                  name: 'scope',
                  message: customConfig.messages.scope || '请输入scope (可选):',
              },

    ciMsg: {
        type: 'input',
        name: 'msg',
        message: customConfig.messages.subject || '请输入提交信息:',
        validate: function(value: String) {
            if (value) {
                return true;
            }
            return '提交信息必须输入!';
        },
    },
};
