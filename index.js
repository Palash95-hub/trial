const _ = require("underscore");

// working of require function
// 1st it will look for the argument passed in core inbuilt modules of node
// if not found in core modules, it will look for path provided, if any such file or folder exists
//if not found, it will look in node_modules

console.log(_.contains([1, 2, 3], 2));
