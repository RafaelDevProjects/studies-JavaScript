//code to manipulate cmd line to index.js

import chalk from "chalk";
import fs from "fs";
import takeFile from "./index.js";

const path = process.argv; //node src/cli.js => alura-JavaScript\\app\\src\\cli.js

function printList(result){
    console.log(chalk.yellow('list Links'), result)
}

async function processText(arg){
    const path = arg[2]

    if (fs.lstatSync(path).isFile()){
        const result = await takeFile(path);
        printList(result);
    } else if (fs.lstatSync(path).isDirectory()){
        const archives = await fs.promises.readdir(path)
        archives.forEach(async (nameArchive) => {
            const list = await takeFile(`${path}/${nameArchive}`)
            printList(list);
        })
    }
}

processText(path)

//node app/src/cli.js app/src/text.md => return:
//[
//{ FS: 'https://nodejs.org/api/fs.html' },
//{ CHALK: 'https://www.npmjs.com/package/chalk' }
//]
//