module.exports = function () {
    let r = {}
    r.makeUpAppServer = function () {
        const { exec } = require('child_process');
        console.log("Starting express server on port 3000!");
        exec('node ./node_modules/cpm-utils/app', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log("node couldn't execute the command");
                return;
            }

            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
    return r
}();