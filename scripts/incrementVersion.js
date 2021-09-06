// * Increment Build Number by 1 and add to files

const fs = require("fs");
const chalk = require("chalk");

var package_data = JSON.parse(fs.readFileSync("./package.json").toString());
const version = package_data.version;
var vers = version.split(".");

var appVersion = parseInt(vers[2]);
var newversion = vers[0] + "." + vers[1] + "." + (appVersion + 1).toString();
package_data.version = newversion;

fs.writeFileSync("./package.json", JSON.stringify(package_data, null, 2));

console.log(chalk.green(`[incrementVersion.js] Build Number Incremented : ${appVersion} -> ${appVersion + 1}\n`));
