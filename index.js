var chalk = require("chalk");

var message = chalk.black.bgGreen.bold("Hello ") + chalk.yellow.underline.bold("World");
console.log(message);