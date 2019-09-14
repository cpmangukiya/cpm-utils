module.exports = function (middlewareFunction) {
    let r = {}
    const express = require('express')
    const app = express()
    const port = 3000

    app.get("/healthcheck", function (req, res, next) {
        res.status(200).send("Hello World! Server is up and healthy!")
    })

    app.get('/favicon.ico', (req, res, next) => res.status(204).end())

    app.use("/doSomething", middlewareFunction ? middlewareFunction : function (req, res, next) {
        res.send("Your function is not set!!!")
    })

    app.use("/", function (req, res, next) {
        next("Not Allowed!")
    })

    app.use(function (err, req, res, next) {
        res.status(405).send("Ooops! " + err)
    })


    app.listen(port, () => console.log(`cpm-util app listening on port ${port}!`))
    return r;
};