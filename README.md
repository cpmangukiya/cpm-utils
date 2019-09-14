# cpm-util
This is a utility package for NodeJS Apps 
## Usage
Install the package using npm :
 npm install cpm-util --save
Then, require the package and use it:
 [Comment: To check if this usage is proper]
 var isEmpty = require('cpm-util');
 console.log(isEmpty("")); // true [Sample]
 console.log(v("Hello World")); // false [Sample]
 console.log(v({})); // false [Sample]
 console.log(v({ "hello" : "world" })); // false [Sample]