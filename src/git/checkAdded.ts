const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

const NO_CHANGE: String = `no changes added to commit! please use:
  git-pro commit -a [files]
  to retry!`;
const NOTHING_TO_COMMIT: String = `nothing to commit, working tree clean`;

export default function() {
    let addStdout = shell.exec('git status').stdout;
    if (addStdout.indexOf('no changes added to commit') > 0) {
        ora().fail(NO_CHANGE);
        return false;
    }
    if (addStdout.indexOf('nothing to commit') > 0) {
        ora().fail(NOTHING_TO_COMMIT);
        return false;
    }
    return true;
}
