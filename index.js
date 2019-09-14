module.exports = function () {
    let r = {}
    r.isEmpty = function (input) {
        // Returns true if the input is either undefined, null, empty, {} or []. false otherwise.
        return (input === undefined || input === null || input === '' || input === {} || input === [])
    }
    return r
}();