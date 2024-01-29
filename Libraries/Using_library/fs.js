import fs from 'fs'
import chalk from 'chalk';
import { error } from 'console';

function treatsError(error){
    throw new Error(chalk.red(error.code, 'not file in directory')); // will be launched in the terminal

};


 function takeFile(filePath) {
    const encoding = 'utf-8'
            // filePath , endcode (UTF-8), (error, text)
     fs.readFile(filePath, encoding, (error, text) => {
         if (error){
             treatsError(error)
         }
         console.log(text)
     })
     
};

takeFile('../readme.md')
