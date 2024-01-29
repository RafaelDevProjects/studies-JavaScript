import fs from 'fs'
import chalk from 'chalk';
import { error } from 'console';

function treatsError(error){
    throw new Error(chalk.red(error.code, 'not file in directory')); // will be launched in the terminal

};

function takeFile(filePath){
    const encoding = 'utf-8'
    fs.promises
        .readFile(filePath, encoding)
        .then((text) => console.log(chalk.green(text))) //promisses then readFile is running(async code)
        .catch((error) => treatsError(error)) // if the promisse find a error
        .finally((message) => console.log('finished')) //when the run is finally finished
}

takeFile('../readme.md')
