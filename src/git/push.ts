const shell = require('shelljs');
const ora = require('ora');
shell.config.silent = true;

function push() {
    const pushSpinner = ora('git push').start();
    const { brName } = shell.exec(`git symbolic-ref --short -q HEAD`);
    console.log(`git push --set-upstream origin ${brName}`);
    
    // const { stderr, code } = shell.exec(`git push --set-upstream origin ${brName}`);

    // if (code !== 0) {
    //     pushSpinner.fail('push failed!');
    //     throw new Error(stderr);
    // }
    // pushSpinner.succeed('push succeed!');
    return true;
}

export default push;
