module.exports = function () {
    let r = {}

    const subProcess = require("./sub-process");

    r.doSomething = null;

    r.isEmpty = function (input) {
        // Returns true if the input is either undefined, null, empty, {} or []. false otherwise.
        return (input === undefined || input === null || input === '' || input === {} || input === [])
    }

    r.launchServer = function () {
        subProcess.makeUpAppServer();
    }

    return r
}();