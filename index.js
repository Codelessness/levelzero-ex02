// ex02: Read the name of Your User
var readlineSync = require('readline-sync');

var userName = readlineSync.question("what is your name? ");
console.log("Your name is : " + userName);