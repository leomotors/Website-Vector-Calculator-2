// * Config to config.ts

process.env.TZ = "Asia/Bangkok";

const fs = require("fs");
const chalk = require("chalk");

var package_data = JSON.parse(fs.readFileSync("./package.json").toString());
const version = package_data.version;

function _addZero(num) {
    if (num < 10) {
        return `0${num}`;
    }
    else {
        return `${num}`;
    }
}

const d = new Date();
const year = d.getFullYear();
const month = _addZero(d.getMonth() + 1);
const day = _addZero(d.getDate());
const hour = _addZero(d.getHours());
const min = _addZero(d.getMinutes());
const sec = _addZero(d.getSeconds());

var formattedDate = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

const pkgInfoFile = `
export const Version = "${version}";
export const BuildTime = "${formattedDate}";
`;

fs.writeFileSync("./src/config.ts", pkgInfoFile);
console.log(chalk.green("[configPackage.js] Config Success\n"));
