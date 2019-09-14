# cpm-utils
This is a utility package for NodeJS Apps 
## Usage
Install the package using npm :
 ```
 npm install cpm-utils --save
 ```
Then, require the package and use it:
 ```
 var cpmUtils = require('cpm-utils');
 console.log(cpmUtils.isEmpty("")); // true [Sample]
 console.log(cpmUtils.isEmpty("Hello World")); // false [Sample]
 console.log(cpmUtils.isEmpty({})); // true [Sample]
 console.log(cpmUtils.isEmpty({ "hello" : "world" })); // false [Sample]
 ```
Tiny express app is configured to call a middleware function of your own on "/doSomething" GET method. Express Exception handling can be done by calling next(err) appropriately :
 ```
 var cpmUtils = require('cpm-utils');
 cpmUtils.launchExpressServer(function (req, res, next) {
    // Do your stuff
    res.send("My Function Called!");
 });
 // And then hit http://localhost:3000/doSomething to execute your code.
 // Healthecheck URL : http://localhost:3000/healthcheck
 ```