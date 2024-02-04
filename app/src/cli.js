//code to manipulate cmd line to index.js

import chalk from "chalk";
import takeFile from "./index.js";

const path = process.argv; //node src/cli.js => alura-JavaScript\\app\\src\\cli.js

function processText(path){
    const result = takeFile(path[2]);
    console.log(chalk.yellow('list links'),result);
}

processText(path)

//node app/src/cli.js app/src/text.md => return:
//[
//{ FS: 'https://nodejs.org/api/fs.html' },
//{ CHALK: 'https://www.npmjs.com/package/chalk' }
//]
//