# cpm-util
This is a utility package for NodeJS Apps 
## Usage
Install the package using npm :
 ```
 npm install cpm-util --save
 ```
Then, require the package and use it:
 ```
 var cpmUtils = require('cpm-util');
 console.log(cpmUtils.isEmpty("")); // true [Sample]
 console.log(cpmUtils.isEmpty("Hello World")); // false [Sample]
 console.log(cpmUtils.isEmpty({})); // false [Sample]
 console.log(cpmUtils.isEmpty({ "hello" : "world" })); // false [Sample]
 ```
Tiny express app is configured to call a middleware function of your own named "doSomething". Express Exception handling can be done by calling next(err) appropriately :
 ```
 var cpmUtils = require('cpm-util');
 cpmUtils.doSomething = function(req, res, next) {
     // Do Your Stuff. Play with req, res, next.
 }
 // Run server by hitting **node app** in console
 // And then hit http://localhost:3000/doSomething to see your code being executed.
 // Healthecheck URL : http://localhost:3000/healthcheck
 ```