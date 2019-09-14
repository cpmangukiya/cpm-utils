const express = require('express')
const index = require('./index.js')
const app = express()
const port = 3000

app.get("/healthcheck", function (req, res, next) {
    res.status(200).send("Hello World! Server is up and healthy!")
})

app.get('/favicon.ico', (req, res, next) => res.status(204).end())

app.use("/doSomething", index.doSomething)

app.use("/", function (req, res, next) {
    next("Not Allowed!")
})

app.use(function (err, req, res, next) {
    res.status(405).send("Ooops! " + err)
})


app.listen(port, () => console.log(`cpm-util app listening on port ${port}!`))