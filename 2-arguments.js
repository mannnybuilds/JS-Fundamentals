const { argv } = require('node:process');

// Count the number of actual arguments (excluding the first two default argv entries)
const argCount = argv.length - 2;

if (argCount === 0) {
  console.log("No argument");
} else if (argCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}