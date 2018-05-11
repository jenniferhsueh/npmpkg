var chalk = require("chalk");

var message = chalk.black.bgGreen.bold("Good ") + chalk.rgb(123, 45, 67).bold(" Morn ") + chalk.yellow.underline.bold("World");
console.log(message);